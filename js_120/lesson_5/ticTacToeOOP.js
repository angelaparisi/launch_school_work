const readline = require("readline-sync");

class Card {
  static SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
  static RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10",
    "Jack", "Queen", "King", "Ace"];

  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    this.hidden = false;
  }
  getCardInfo() {
    if (this.hidden) return 'Hidden';
    return `${this.rank} of ${this.suit}`;
  }

  getRank() {
    return this.rank;
  }

  getSuit() {
    return this.suit;
  }

  isAce() {
    return this.getRank() === "Ace";
  }

  isKing() {
    return this.getRank() === "King";
  }

  isQueen() {
    return this.getRank() === "Queen";
  }

  isJack() {
    return this.getRank() === "Jack";
  }

  isFaceCard() {
    return this.isKing() || this.isQueen() || this.isJack();
  }

  hide() {
    this.hidden = true;
  }

  reveal() {
    this.hidden = false;
  }

  isHidden() {
    return this.hidden;
  }
}

class Deck {
  constructor() {
    this.resetDeck();
  }

  shuffleDeck(deck) {
    for (let index = deck.length - 1; index > 0; index--) {
      let otherIndex = Math.floor(Math.random() * (index + 1));
      [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]];
    }
    return deck;
  }
  setDeck() {
    for (let suitIndex = 0; suitIndex < Card.SUITS.length; suitIndex++) {
      let suit = Card.SUITS[suitIndex];

      for (let valueIndex = 0; valueIndex < Card.RANKS.length; valueIndex++) {
        let value = Card.RANKS[valueIndex];
        this.deck.push(new Card(suit, value));
      }
    }
    this.shuffleDeck(this.deck);
  }
  dealCardFaceUp() {
    return this.deck.pop();
  }
  dealCardFaceDown() {
    let card = this.dealCardFaceUp();
    card.hide();
    return card;
  }
  resetDeck() {
    this.deck = [];
    this.setDeck();
  }
}

let cardHand = {
  resetHand() {
    this.hand = [];
  },

  revealHand() {
    return this.joinAnd(this.hand.map(card => card.getCardInfo()));
  },

  revealHiddenCards() {
    this.hand.forEach(card => {
      if (card.isHidden()) {
        card.reveal();
      }
    });
  },

  joinAnd(arr, delimiter = ', ', word = 'and') {
    switch (arr.length) {
      case 0:
        return '';
      case 1:
        return `${arr[0]}`;
      case 2:
        return arr.join(` ${word} `);
      default:
        return arr.slice(0, arr.length - 1).join(delimiter) +
             ` ${word} ${arr[arr.length - 1]}`;
    }
  }
};

class Player {
  static MONEY = 5;
  static WALK_AWAY_MONEY = 2 * Player.MONEY;
  constructor() {
    this.hand = [];
    this.money = Player.MONEY;
  }
  loseBet() {
    this.money -= 1;
  }
  winBet() {
    this.money += 1;
  }
  isBroke() {
    return this.money === 0;
  }
  isRich() {
    return this.money === Player.WALK_AWAY_MONEY;
  }
  showMoney() {
    console.log(`You have $${this.money} in your purse`);
  }
}
Object.assign(Player.prototype, cardHand);

class Dealer {
  constructor() {
    this.hand = [];
  }
}
Object.assign(Dealer.prototype, cardHand);

class TwentyOneGame {
  static WINNING_SCORE = 21;
  static DEALER_STAYS = TwentyOneGame.WINNING_SCORE - 4;
  static FACE_VALUE = 10;
  static MAX_ACE_VALUE = 11;
  static MIN_ACE_VALUE = 1;

  constructor() {
    this.player = new Player();
    this.dealer = new Dealer();
    this.deck = new Deck();
  }

  start() {
    this.displayRules();
    this.determineReadiness();
    console.clear();
    while (true) {
      this.deck.resetDeck();
      this.player.showMoney();
      this.playRound();
      if (this.player.isRich() || this.player.isBroke() ||
          !this.playAgain()) break;
      console.clear();
    }
    this.displayGoodbyeMessage();
  }

  playRound() {
    while (true) {
      this.setInitialHands();
      this.displayBothHands();
      this.playerTurn();
      if (this.isBusted(this.player)) break;
      this.dealerTurn();
      this.displayBothHands();
      break;
    }
    this.displayRoundWinner();
    this.updatePurse();
    this.player.showMoney();
  }

  setInitialHands() {
    this.player.hand = [this.deck.dealCardFaceUp(),
      this.deck.dealCardFaceUp()];
      this.dealer.hand = [this.deck.dealCardFaceDown(),
      this.deck.dealCardFaceUp()];
  }

  hit(player) {
    player.hand.push(this.deck.dealCardFaceUp());
  }

  totalScore(hand) {
    let score = 0;
    for (let index = 0; index < hand.length; index++) {
      let card = hand[index];
      if (card.isHidden()) continue;
      if (card.isAce()) {
        score += TwentyOneGame.MAX_ACE_VALUE;
      } else if (card.isFaceCard()) {
        score += TwentyOneGame.FACE_VALUE;
      } else {
        score += Number(card.getRank());
      }
    }

    hand.filter(card => card.isAce()).forEach(_ => {
      if (score > TwentyOneGame.WINNING_SCORE) {
        score -= (TwentyOneGame.MAX_ACE_VALUE - TwentyOneGame.MIN_ACE_VALUE);
      }
    });

    return score;
  }

  displayTotalScore() {
    console.log(`Your total is ${this.totalScore(this.player.hand)}`);
    console.log(`The Dealer has a score of ${this.totalScore(this.dealer.hand)}`);
  }

  playerTurn() {
    while (true) {
      let play = this.hitOrStay();

      if (play === 'h') {
        console.clear();
        this.hit(this.player);

        console.log('You chose to hit!\n');
        console.log('-----');
        console.log(`Dealer has ${this.dealer.revealHand()}`);
        console.log(`Your cards are now: ${this.player.revealHand()}`);
        console.log(`Your total is now: ${this.totalScore(this.player.hand)}`);
        console.log('-----' + '\n');
      }

      if (play === 's'  || this.isBusted(this.player)) break;
    }
  }

  dealerTurn() {
    console.clear();
    console.log('\nDealer turn...\n');
    while (this.totalScore(this.dealer.hand) < TwentyOneGame.DEALER_STAYS) {
      console.log(`Dealer hits!`);

      this.hit(this.dealer);
      this.dealer.revealHiddenCards();

      console.log(`Dealer's cards are now: ${this.dealer.revealHand()}`);
    }
  }

  hitOrStay() {
    console.log('Would you like to hit or stay? (h/s)');
    let answer = readline.question().toLowerCase();
    while (answer !== 'h' && answer !== 's') {
      console.log("Please enter either 'h' or 's'");
      answer = readline.question().toLowerCase();
    }
    return answer;
  }

  isBusted(player) {
    return this.totalScore(player.hand) > TwentyOneGame.WINNING_SCORE;
  }

  displayRules() {
    console.log(`Welcome to Twenty-One!`);
    console.log("\nRules:\n\nIt's you vs. the dealer.");
    console.log(`The goal is to get as close to ${TwentyOneGame.WINNING_SCORE} as possible without going over.`);
    console.log(`If you go over ${TwentyOneGame.WINNING_SCORE}, it's a bust, and you lose.`);
    console.log('Ace can be worth 1 or 11 depending on the circumstances.');
    console.log('Player goes first and can either hit or stay.');
    console.log('You will start with $5 in your purse.');
    console.log('   Everytime you win, you gain $1.');
    console.log('   Everytime you lose, you lose $1.');
    console.log(`   If you are broke or gain $${this.player.WALK_AWAY_MONEY}, the game will end.`);
    console.log('   You can walk away at any time!');
    console.log('\nGood luck!\n');
    console.log('-----');
  }

  determineReadiness() {
    console.log("When you understand the rules, enter 's' to start the game!");
    let answer = readline.question().toLowerCase();

    while (answer !== 's') {
      console.log("Please enter 's' to continue.");
      answer = readline.question().toLowerCase();
    }

    return answer === 's';
  }

  displayGoodbyeMessage() {
    if (this.player.money === Player.WALK_AWAY_MONEY) {
      console.log("Congrats! You have $10 in your purse, you're rich!");
    } else if (this.player.money === 0) {
      console.log("You're broke. Better luck next time.");
    } else {
      console.clear();
      console.log(`You walked away with $${this.player.money}!`);
    }
    console.log('Thanks for playing Twenty-One');
  }

  displayBothHands() {
    console.log('\n' + '-----');
    console.log(`Dealer has ${this.dealer.revealHand()}, for a total of: ${this.totalScore(this.dealer.hand)}`);
    console.log(`Player has ${this.player.revealHand()}, for a total of: ${this.totalScore(this.player.hand)}`);
    console.log('-----' + '\n');
  }

  determineRoundWinner() {
    if (this.isBusted(this.dealer)) {
      return 'DEALER_BUSTED';
    } else if (this.isBusted(this.player)) {
      return 'PLAYER_BUSTED';
    } else if (this.totalScore(this.player.hand) >
               this.totalScore(this.dealer.hand)) {
      return 'PLAYER';
    } else if (this.totalScore(this.player.hand) <
               this.totalScore(this.dealer.hand)) {
      return 'DEALER';
    } else {
      return 'TIE';
    }
  }

  displayRoundWinner() {
    switch (this.determineRoundWinner()) {
      case 'PLAYER_BUSTED':
        console.log('You busted! Dealer wins this round and you lose $1!\n');
        break;
      case 'DEALER_BUSTED':
        console.log('Dealer busted! You win this round and gain $1!\n');
        break;
      case 'PLAYER':
        console.log('You win this round and gain $1!\n');
        break;
      case 'DEALER':
        console.log('Dealer wins this round and you lose $1!\n');
        break;
      case 'TIE':
        console.log("This round is a tie. Your purse stays the same.\n");
    }
  }

  updatePurse() {
    if (this.determineRoundWinner() === 'PLAYER' ||
        this.determineRoundWinner() === 'DEALER_BUSTED') {
      this.player.winBet();
    } else if (this.determineRoundWinner() === 'DEALER' ||
               this.determineRoundWinner() === 'PLAYER_BUSTED') {
      this.player.loseBet();
    }
  }

  playAgain() {
    let answer;
    console.log('\n-----');
    while (true) {
      console.log('\nWould you like to play another round? (y/n)');
      answer = readline.question().toLowerCase();
      if (['y', 'n'].includes(answer)) break;
      console.log('Sorry, invalid choice.');
    }
    return answer.toLowerCase() === 'y';
  }
}

let game = new TwentyOneGame();
game.start();