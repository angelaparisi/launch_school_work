let readline = require('readline-sync');

class Player {
  constructor() {
    this.move = null;
  }
}

class Computer extends Player {
  constructor() {
    super();
  }
  
  choose() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    this.move = choices[randomIndex];
  }
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

class Human extends Player {
  constructor() {
    super();
  }
  choose() {
    let choice;

    while (true) {
      console.log('\n-----');
      console.log("\nChoose (r)ock, (p)aper, (sc)issors, (l)izard, (sp)ock");
      console.log("(or input 'quit')");
      choice = readline.question().toLowerCase();
      if ((Object.keys(createRules().choices)).includes(choice)
            || (choice === 'quit')) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = createRules().choices[choice] || 'quit';
  }
}

class RPSGame {
  constructor() {
    this.human = new Human();
    this.computer = new Computer(); 
  }
  
  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  }

  displayWinner() {
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
               (humanMove === 'paper' && computerMove === 'scissors') ||
               (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie");
    }
  }

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  }

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  }
}


let game = new RPSGame();
game.play();