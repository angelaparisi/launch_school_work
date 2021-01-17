const readline = require('readline-sync');

function createPlayer() {
  return {
    move: null,
  };
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('\n-----');
        console.log("\nChoose (r)ock, (p)aper, (sc)issors, (l)izard, (sp)ock");
        console.log("(or input 'quit')");
        choice = readline.question().toLowerCase();
        if ((Object.keys(createRules().choices)).includes(choice.toLowerCase())
            || (choice === 'quit')) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = createRules().choices[choice] || 'quit';
    },
  };
  return Object.assign(playerObject, humanObject);
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose(gameHistory, roundInfo) {
      let availChoices = Object.values(createRules().choices);

      if (gameHistory.humanRoundMoves.length >= 2 && roundInfo.humanMove) {
        let lastHMove = String(gameHistory.humanRoundMoves.slice(-1));
        let secLastHMove = String(gameHistory.humanRoundMoves.slice(-2, -1));
        if (lastHMove === secLastHMove) {
          availChoices = createRules().computerStrategyChoices[lastHMove];
        }
      }
      let randomIndex = Math.floor(Math.random() * availChoices.length);
      this.move = availChoices[randomIndex];
    }
  };

  return Object.assign(playerObject, computerObject);
}

function createRules() {
  return {
    choices: {
      r: 'Rock',
      p: 'Paper',
      sc: 'Scissors',
      l: 'Lizard',
      sp: 'Spock'
    },

    winningChoices: {
      Rock: ['Lizard', 'Scissors'],
      Paper: ['Rock', 'Spock'],
      Scissors: ['Paper', 'Lizard'],
      Lizard: ['Spock','Paper'],
      Spock: ['Scissors', 'Rock']
    },

    computerStrategyChoices: {
      Rock: ['Paper', 'Spock'],
      Paper: ['Scissors', 'Lizard'],
      Scissors: ['Rock', 'Spock'],
      Lizard: ['Rock', 'Scissors'],
      Spock: ['Paper', 'Lizard'],
    }
  };
}

function gameInfo() {
  const WINNING_SCORE = 5;
  return {
    gameStatus: true,

    score: {
      human: 0,
      computer: 0
    },

    lastRound: {
      humanMove: null,
      computerMove: null,
      roundWinner: null,
    },

    gameHistory: {
      humanRoundMoves: [],
      computerRoundMoves: [],
      roundWinners: [],
      gameWinners: [],
    },

    gameEnd() {
      if (this.score.human === WINNING_SCORE ||
          this.score.computer === WINNING_SCORE) {
        this.gameStatus = false;
      }
    },

    updateCurrentRoundScore() {
      if (this.lastRound.roundWinner === 'human') {
        this.score.human += 1;
      } else if (this.lastRound.roundWinner === 'computer') {
        this.score.computer += 1;
      }
    },

    displayCurrentRoundScore() {
      console.log(`\nCURRENT SCORE --- You: ${this.score.human}, Computer: ${this.score.computer}`);
    },

    displayFinalRoundScore() {
      console.log('-----');
      if (this.score.human === 5) {
        console.log('\nFINAL SCORE - Congrats you won!');
      } else {
        console.log('\nFINAL SCORE - Computer wins the game this time!');
      }
      console.log(`\n--- You: ${this.score.human}, Computer: ${this.score.computer} ---`);
    },

    displayTotalGameWins() {
      let humanGameWins = (this.gameHistory.gameWinners).filter(winner => {
        return winner === 'human';
      }).length;
      let computerGameWins = (this.gameHistory.gameWinners).filter(winner => {
        return winner === 'computer';
      }).length;
      console.log(`\nGAME STATUS --- PLAYER: ${humanGameWins}, COMPUTER: ${computerGameWins}`);
    },

    updatePlayerRoundHistory() {
      this.gameHistory.humanRoundMoves.push(this.lastRound.humanMove);
      this.gameHistory.computerRoundMoves.push(this.lastRound.computerMove);
      this.gameHistory.roundWinners.push(this.lastRound.roundWinner);
    },

    updateGameHistory() {
      this.gameHistory.gameWinners.push(`${this.score.human === WINNING_SCORE ? 'human' : 'computer'}`);
    },

    resetGame() {
      this.score.human = 0;
      this.score.computer = 0;
      this.lastRound.humanMove = null;
      this.lastRound.computerMove = null;
      this.lastRound.roundWinner = null;
      this.gameStatus = true;
    },
  };
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  rules: createRules(),
  info: gameInfo(),

  clearText() {
    console.clear();
  },

  displayWelcomeMessage() {
    this.clearText();
    console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
    console.log("\nRules:\nIt's you vs the computer.");
    console.log(`\n${' '.repeat(3)}- Rock crushes Scissors and Lizard`);
    console.log(`${' '.repeat(3)}- Paper covers Rock and disproves Spock`);
    console.log(`${' '.repeat(3)}- Scissors cuts Paper and decapitates Lizard` );
    console.log(`${' '.repeat(3)}- Lizard poisons Spock and eats Paper`);
    console.log(`${' '.repeat(3)}- Spock smashes Scissors and vaporizes Rock`);
    console.log("\nInput 'r' for rock, 'p' for paper, 'sc' for scissors,");
    console.log("'l' for lizard, and 'sp' for spock.");
    console.log("\nInput 'quit' to leave the current round.");
    console.log("But, if you quit the round, you forfeit that game!");
    console.log("\nFirst to win 5 rounds is the winner of the game!");
    console.log("\n-----");
  },

  determineReady() {
    while (true) {
      console.log("\nAre you ready to begin? - input y");
      let answer = readline.question().toLowerCase();
      if (answer === 'y' || answer === 'quit') break;
      console.log('Sorry, invalid choice.');
    }
    this.clearText();
  },

  displayGoodbyeMessage() {
    console.log('\nThanks for playing Rock, Paper, Scissors, Lizard, Spock!');
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    this.clearText();
    console.log(`You chose: ${humanMove}`);
    console.log(`\nThe computer chose: ${computerMove}\n`);

    if ((this.rules.winningChoices[humanMove]).includes(computerMove)) {
      console.log('You win this round!');
    } else if (humanMove === computerMove) {
      console.log("It's a tie");
    } else {
      console.log('Computer wins this round!');
    }
  },

  detectWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if ((this.rules.winningChoices[humanMove]).includes(computerMove)) {
      return 'human';
    } else if (humanMove === computerMove) {
      return 'none';
    } else {
      return 'computer';
    }
  },

  pushRoundInfo() {
    this.info.lastRound.humanMove = this.human.move;
    this.info.lastRound.computerMove = this.computer.move;
    this.info.lastRound.roundWinner = this.detectWinner();
  },

  quitGamePlay() {
    return this.human.move === 'quit';
  },

  playAgain() {
    let answer;
    console.log('\n-----');
    while (true) {
      console.log('\nWould you like to play another game? (y/n)');
      answer = readline.question().toLowerCase();
      if ('yn'.includes(answer)) break;
      console.log('Sorry, invalid choice.');
    }
    return answer.toLowerCase() === 'y';
  },


  updateRoundInfo() {
    this.pushRoundInfo();
    this.info.updateCurrentRoundScore();
    this.info.updatePlayerRoundHistory();
    this.info.gameEnd();
  },

  playMenu() {
    this.info.resetGame();
    this.displayWelcomeMessage();
    this.info.displayTotalGameWins();
    this.determineReady();
  },

  endOfRound() {
    this.info.displayFinalRoundScore();
    this.info.updateGameHistory();
    this.info.displayTotalGameWins();
  },

  play() {
    while (true) {
      this.playMenu();
      while (true) {
        this.human.choose();
        if (this.human.move === 'quit') {
          this.clearText();
          break;
        }
        this.computer.choose(this.info.gameHistory, this.info.lastRound);
        this.displayWinner();
        this.updateRoundInfo();
        if (!this.info.gameStatus) break;
        this.info.displayCurrentRoundScore();
      }
      this.endOfRound();
      if (!this.playAgain()) break;
    }
    this.clearText();
    this.info.displayTotalGameWins();
    this.displayGoodbyeMessage();
  }
};

RPSGame.play();