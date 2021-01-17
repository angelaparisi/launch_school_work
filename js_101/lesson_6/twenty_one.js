const readline = require("readline-sync");

const SUITS = ['H', 'D', 'S', 'C'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9',
  '10', 'J', 'Q', 'K', 'A'];

const GAME_TITLE = 'Twenty-One';

const GAME_VALUE = 21;
const DEALER_VALUE = 17;
const GAME_WINNER = 3;
const MIN_ACE_AMOUNT = 1;
const MAX_ACE_AMOUNT = 11;
const FACE_CARD_AMOUNT = 10;


const TEXT_LINE = '-------';

const WEBSITE_RULES = 'https://www.blackjack.org/blackjack-rules/';

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayRules() {
  console.log(`Welcome to ${GAME_TITLE}!`);
  console.log("\nRules:\n\nIt's you vs. the dealer.");
  console.log(`The goal is to get as close to ${GAME_VALUE} as possible without going over.`);
  console.log(`If you go over ${GAME_VALUE}, it's a bust, and you lose.`);
  console.log('Ace can be worth 1 or 11 depending on the circumstances.');
  console.log('Player goes first and can either hit or stay.');
  console.log(`For more rules, visit ${WEBSITE_RULES}`);
  console.log('\nFirst to win three games is the grand winner!\n\nGood luck!');
  console.log('\n' + TEXT_LINE + '\n');
}

function readyToPlay() {
  prompt("When you understand the rules, enter 's' to start the game!");
  let answer = readline.question().toLowerCase();

  while (answer !== 's') {
    prompt("Please enter 's' to continue.");
    answer = readline.question().trim().toLowerCase();
  }

  return answer === 's';
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }

  return array;
}

function initalizeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex++) {
    let suit = SUITS[suitIndex];

    for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
      let value = VALUES[valueIndex];
      deck.push([suit, value]);
    }
  }

  return shuffle(deck);
}


function total(cards) {
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(value => {
    if (value === "A") {
      sum += MAX_ACE_AMOUNT;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += FACE_CARD_AMOUNT;
    } else {
      sum += Number(value);
    }
  });

  values.filter(value => value === 'A').forEach(_ => {
    if (sum > GAME_VALUE) {
      sum -= (MAX_ACE_AMOUNT - MIN_ACE_AMOUNT);
    }
  });

  return sum;
}

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function joinAnd(arr, delimiter = ', ', word = 'and') {
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

function hand(cards) {
  let cardList = cards.map(card => `${card[0]},${card[1]}`);
  return joinAnd(cardList);
}

function busted(cards) {
  return total(cards) > GAME_VALUE;
}

function detectRoundResult(dealerCards, playerCards) {
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  if (playerTotal > GAME_VALUE) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > GAME_VALUE) {
    return 'DEALER_BUSTED';
  } else if (dealerTotal < playerTotal) {
    return 'PLAYER';
  } else if (dealerTotal > playerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function hitOrStay() {
  prompt('Would you like to hit or stay? (h/s)');
  let answer = readline.question().toLowerCase();

  while (answer !== 'h' && answer !== 's') {
    prompt("Please enter either 'h' or 's'");
    answer = readline.question().toLowerCase();
  }

  return answer;
}


function displayBothHands(dealerCards, playerCards, dealerTotal, playerTotal) {
  console.log('\n' + TEXT_LINE);
  console.log(`Dealer has ${joinAnd(dealerCards)}, for a total of: ${dealerTotal}`);
  console.log(`Player has ${joinAnd(playerCards)}, for a total of: ${playerTotal}`);
  console.log(TEXT_LINE + '\n');
}

function displayRoundResult(dealerCards, playerCards) {
  let result = detectRoundResult(dealerCards, playerCards);

  switch (result) {
    case 'PLAYER_BUSTED':
      console.log('You busted! Dealer wins this round!\n');
      break;
    case 'DEALER_BUSTED':
      console.log('Dealer busted! You win this round!\n');
      break;
    case 'PLAYER':
      console.log('You win this round!\n');
      break;
    case 'DEALER':
      console.log('Dealer wins this round!\n');
      break;
    case 'TIE':
      console.log("This round is a tie!\n");
  }
}

function updateScore(dealerCards, playerCards, score) {
  let result = detectRoundResult(dealerCards, playerCards);

  switch (result) {
    case 'PLAYER_BUSTED':
      score.dealer += 1;
      break;
    case 'DEALER_BUSTED':
      score.player += 1;
      break;
    case 'PLAYER':
      score.player += 1;
      break;
    case 'DEALER':
      score.dealer += 1;
      break;
  }
}

function displayCurrentScoreMessage(score) {
  console.log(`--- Current Score: You: ${score.player}, Dealer: ${score.dealer} ---\n`);
}

function displayFinalScoreMessage(score) {
  console.log(`\n--- Final score --- \n\nYou: ${score.player}\nDealer: ${score.dealer}\n`);
}

function playerTurn(playerCards, playerTotal, dealerCards, deck) {
  while (true) {
    let play = hitOrStay();

    if (play === 'h') {
      console.clear();
      playerCards.push(deck.pop());
      playerTotal = total(playerCards);

      console.log('You chose to hit!\n');
      console.log(TEXT_LINE);
      console.log(`Dealer has ${dealerCards[0]} and ?`);
      console.log(`Your cards are now: ${hand(playerCards)}`);
      console.log(`Your total is now: ${playerTotal}`);
      console.log(TEXT_LINE + '\n');
    }

    if (play === 's' || busted(playerCards)) break;
  }
}

function dealerTurn(dealerCards, dealerTotal, deck) {
  console.log('\nDealer turn...\n');

  while (dealerTotal < DEALER_VALUE) {
    console.log(`Dealer hits!`);

    dealerCards.push(deck.pop());
    dealerTotal = total(dealerCards);

    console.log(`Dealer's cards are now: ${hand(dealerCards)}`);
  }
}

function playNextRound() {
  prompt('Keep playing? (y/n)');
  let answer = readline.question().toLowerCase();

  if (answer !== 'y' && answer !== 'n') {
    prompt("Please enter either 'y' or 'n'");
    answer = readline.question().trim().toLowerCase();
  }

  return answer === 'y';
}

function playGameAgain() {
  console.log(TEXT_LINE + '\n');
  prompt('Do you want to play again? (y/n)');
  let answer = readline.question().toLowerCase();

  while (answer !== 'y' && answer !== 'n') {
    prompt("Please enter either 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }

  return answer === 'y';
}

function gameEnds(score) {
  return score.player === GAME_WINNER || score.dealer === GAME_WINNER;
}

function displayGrandWinner(score) {
  if (score.player > score.dealer) {
    console.log('Congratulations! You are the GRAND WINNER!');
  } else if (score.dealer > score.player) {
    console.log('The dealer is the GRAND WINNER!');
  } else {
    console.log('It was a tie.');
  }
}

// Main Game Loop
while (true) {
  console.clear();

  let score = {player: 0, dealer: 0};
  let roundNumber = 0;

  displayRules();
  readyToPlay();

  // Round Loop
  while (true) {
    console.clear();

    let deck = initalizeDeck();
    let playerCards = [];
    let dealerCards = [];

    // initial deal
    playerCards.push(...popTwoFromDeck(deck));
    dealerCards.push(...popTwoFromDeck(deck));

    let playerTotal = total(playerCards);
    let dealerTotal = total(dealerCards);
    roundNumber += 1;

    console.log(`Round ${roundNumber} -- You: ${score.player}, Dealer: ${score.dealer} --`);
    console.log(`\nDealer has ${dealerCards[0]} and ?`);
    console.log(`You have: ${playerCards[0]} and ${playerCards[1]}, for a total of ${playerTotal}.\n`);

    playerTurn(playerCards, playerTotal, dealerCards, deck);
    playerTotal = total(playerCards);

    if (!busted(playerCards)) {
      console.clear();
      console.log(`You stayed at ${playerTotal}`);

      dealerTurn(dealerCards, dealerTotal, deck);
      dealerTotal = total(dealerCards);

      if (!busted(dealerCards)) {
        console.log(`Dealer stays at ${dealerTotal}`);
      }

      displayBothHands(dealerCards, playerCards, dealerTotal, playerTotal);
    }

    updateScore(dealerCards, playerCards, score);

    if (gameEnds(score)) break;

    displayRoundResult(dealerCards, playerCards);
    displayCurrentScoreMessage(score);

    if (!playNextRound()) break;
  }

  displayGrandWinner(score);
  displayFinalScoreMessage(score);

  if (!playGameAgain()) break;
}

console.clear();
console.log(`Thanks for playing ${GAME_TITLE}!`);