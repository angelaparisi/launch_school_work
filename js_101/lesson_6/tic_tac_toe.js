const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const TEXT_LINE = '-----';

const WINNING_SCORE = 3;
const MIDDLE_SQUARE = 5;

const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function scoreMessage(scores) {
  return `Score: You: ${Number(scores['player'])}, Computer: ${Number(scores['computer'])}`;
}

function displayRules() {
  console.log('Welcome to Tic Tac Toe!');
  console.log("\nRules:\n\nIt's you (the player) vs. the computer.");
  console.log("You will choose who plays first for the whole game.");
  console.log(`You are '${HUMAN_MARKER}' and the computer is '${COMPUTER_MARKER}'.`);
  console.log("First to win 3 games is the GRAND WINNER.");
  console.log("Good luck!");
  console.log(`\n${TEXT_LINE}\n`);
}

function pickFirstPlayer() {
  prompt("Who should go first? You ('p') or the computer ('c')?");
  let firstPlayer = readline.question().toLowerCase();

  if (firstPlayer !== 'p' && firstPlayer !== 'c') {
    prompt("That's not a valid answer. Please input 'p' or 'c'.");
    firstPlayer = readline.question().toLowerCase();
  }

  return firstPlayer;
}

function displayBoard(board, scores) {
  console.log(`\nCurrent ${scoreMessage(scores)}\n\n${TEXT_LINE}`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) +
             `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function findAtRiskSquare(line, board) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === HUMAN_MARKER).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function computerStrategy(board, marker) {
  let square;

  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, marker);
    if (square) break;
  }
  return square;
}


function chooseRandomSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  return square;
}

function computerChoosesSquare(board) {
  let square;

  square = computerStrategy(board, COMPUTER_MARKER);

  if (!square) {
    square = computerStrategy(board, HUMAN_MARKER);
  }

  if (!square) {
    if (board[MIDDLE_SQUARE] === INITIAL_MARKER) {
      square = MIDDLE_SQUARE;
    }
  }

  if (!square) {
    square = chooseRandomSquare(board);
  }

  board[square] = COMPUTER_MARKER;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'p') {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === 'p' ? 'c' : 'p';
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return detectWinner(board);
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'p';
    } else if (board[sq1] === COMPUTER_MARKER &&
               board[sq2] === COMPUTER_MARKER &&
               board[sq3] === COMPUTER_MARKER
    ) {
      return 'c';
    }
  }

  return null;
}

function updateScore(scores, board) {
  if (detectWinner(board) === 'p') {
    scores['player'] += 1;
  } else if (detectWinner(board) === 'computer') {
    scores['computer'] += 1;
  }
}

function gameEnds (scores) {
  return scores['player'] === WINNING_SCORE
      || scores['computer'] === WINNING_SCORE;
}

function displayGrandWinner(scores) {
  if (scores['player'] > scores['computer']) {
    console.clear();
    console.log('Congratulations! You are the GRAND WINNER!');

  } else if (scores['computer'] > scores['player']) {
    console.clear();
    console.log('The computer is the GRAND WINNER this time!');
  } else {
    console.clear();
    console.log('It was a tie.');
  }
}

function playNextRound() {
  prompt('Keep playing? (y/n)');
  let answer = readline.question().toLowerCase();

  if (answer !== 'y' && answer !== 'n') {
    prompt('Please enter a valid answer: (y/n)');
    answer = readline.question().trim().toLowerCase();
  }

  return answer === 'y';
}

function playGameAgain() {
  prompt('Great game! Would you like to play another? (y/n)');
  let answer = readline.question().toLowerCase();

  if (answer !== 'y' && answer !== 'n') {
    prompt('Please enter a valid answer: (y/n)');
    answer = readline.question().toLowerCase();
  }

  return answer === 'y';
}

while (true) {
  console.clear();
  let scores = {player: 0, computer: 0};

  displayRules(scores);
  let firstPlayer = pickFirstPlayer();


  while (true) {
    let board = initializeBoard();
    let currentPlayer = firstPlayer;

    while (true) {
      console.clear();
      displayBoard(board, scores);

      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    console.clear();
    displayBoard(board, scores);

    if (someoneWon(board)) {
      updateScore(scores, board);
      console.log(`\n${detectWinner(board)} won this round!`);
      console.log(`\nCurrent ${scoreMessage(scores)}\n\n${TEXT_LINE}\n`);
    } else {
      prompt("It's a tie!");
      console.log(`\nCurrent ${scoreMessage(scores)}\n\n${TEXT_LINE}\n`);
    }

    if (gameEnds(scores)) break;

    if (!playNextRound()) break;
  }

  console.clear();
  displayGrandWinner(scores);
  console.log(`\n\n${TEXT_LINE} Final ${scoreMessage(scores)} ${TEXT_LINE}\n\n`);

  if (!playGameAgain()) break;

}

console.clear();
console.log('Thanks for playing Tic Tac Toe!');