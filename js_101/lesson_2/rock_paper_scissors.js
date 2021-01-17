const readline = require('readline-sync');

const VALID_CHOICES = {
  r: 'rock',
  p: 'paper',
  sc: 'scissors',
  l: 'lizard',
  sp: 'spock'
};

const SCORE = {
  player: 0,
  computer: 0
};

const WINNING_SCORE = 5;

function prompt(message) {
  console.log(`\n=> ${message}`);
}

function welcomeMessage() {
  console.log("Welcome to Rock Paper Scissors Lizard Spock!\n");
  console.log("Rules:\nIt's you vs the computer.");
  console.log("Input 'r' for rock, 'p' for paper, 'sc' for scissors,");
  console.log("'l' for lizard, and 'sp' for spock.");
  console.log("Best out of 5 rounds wins - good luck!\n\n-----");
}

function currentScoreMessage(SCORE) {
  console.log(`\n\n-- Current Score: You: ${SCORE.player}, Computer: ${SCORE.computer} --\n`);
}

function finalScoreMessage(SCORE) {
  console.log(`-- Final score -- \n\nYou: ${SCORE.player}\nComputer: ${SCORE.computer}\n`);
}

function getChoice() {
  prompt(`Choose one: ${Object.values(VALID_CHOICES).join(', ')}`);
  let userChoice = readline.question().toLowerCase();

  while (!Object.keys(VALID_CHOICES).includes(userChoice)) {
    prompt("Please input 'r', 'p', 'sc', 'l', or 'sp'.");
    userChoice = readline.question().toLowerCase();
  }

  return userChoice;
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() *
                    Object.values(VALID_CHOICES).length);
  return (Object.values(VALID_CHOICES))[randomIndex];
}

function playerWins(choice, computerChoice) {
  return (choice === 'r' && computerChoice === 'scissors') ||
         (choice === 'r' && computerChoice === 'lizard') ||
         (choice === 'p' && computerChoice === 'rock') ||
         (choice === 'p' && computerChoice === 'spock') ||
         (choice === 'sc' && computerChoice === 'paper') ||
         (choice === 'sc' && computerChoice === 'lizard') ||
         (choice === 'l' && computerChoice === 'paper') ||
         (choice === 'l' && computerChoice === 'spock') ||
         (choice === 'sp' && computerChoice === 'rock') ||
         (choice === 'sp' && computerChoice === 'scissors');
}


function displayRoundWinner(choice, computerChoice) {
  console.log(`\nYou chose ${VALID_CHOICES[choice]}, computer chose ${computerChoice}\n`);
  if (playerWins(choice, computerChoice)) {
    console.log('You win this round!');
  } else if (choice === computerChoice) {
    console.log("It's a tie!");
  } else {
    console.log('Computer wins this round!');
  }
}

function updateScore(choice, computerChoice, SCORE) {
  if (playerWins(choice, computerChoice)) {
    SCORE.player += 1;
  } else if (choice === computerChoice) {
    SCORE.player += 0;
    SCORE.computer += 0;
  } else {
    SCORE.computer += 1;
  }
}


function displayScore(choice, computerChoice, SCORE) {
  if (SCORE.player === WINNING_SCORE) {
    console.clear();
    console.log("Congratulations, you are the grand winner!\n");
    finalScoreMessage(SCORE);
  } else if (SCORE.computer === WINNING_SCORE) {
    console.clear();
    console.log('Oh schucks! The computer is the grand winner!\n');
    finalScoreMessage(SCORE)
  } else {
    currentScoreMessage(SCORE);
  }
}

function isGameWinner(SCORE) {
  return SCORE.player === WINNING_SCORE || SCORE.computer === WINNING_SCORE;
}

function determinePlayAgain() {
  prompt("Do you want to play again? (y/n)");
  let playAgainAnswer = readline.question().toLowerCase();

  while (playAgainAnswer !== 'n' && playAgainAnswer !== 'y') {
    prompt("Please enter 'y' or 'n'.");
    playAgainAnswer = readline.question().toLowerCase();
  }

  return playAgainAnswer;
}

welcomeMessage();

while (true) {
  let choice = getChoice();
  let computerChoice = getComputerChoice();

  console.clear();

  displayRoundWinner(choice, computerChoice);

  updateScore(choice, computerChoice, SCORE);

  displayScore(choice, computerChoice, SCORE);

  if (isGameWinner(SCORE)) {
    let answer = determinePlayAgain();
    if (answer === 'y') {
      console.clear();
      SCORE.player = 0;
      SCORE.computer = 0;
      welcomeMessage();
    } else break;
  }
}

console.clear();
console.log("Thanks for playing!");