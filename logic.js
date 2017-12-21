var userScore = 0;
var aiScore = 0;
var draws = 0;

function returnUserScore() {
  return userScore
}

function returnAiScore() {
  return aiScore
}

function returnDraws() {
  return draws
}

function computerMove() {
  var result = Math.ceil(Math.random() * 3);
  switch (result) {
    case 1:
      return "paper";
    case 2:
      return "scissors";
    case 3:
      return "rock";
  }
}

function calculateWinner(userMove, aiMove) {
  if(Math.abs(quantifyMove(userMove) - quantifyMove(aiMove)) === 2) {
    if(quantifyMove(userMove) === 1) {
      userScore++;
      return "User Wins!"
    } else {
      aiScore++;
      return "Computer Wins!"
    }
  } else if (quantifyMove(userMove) > quantifyMove(aiMove)) {
    userScore++;
    return "User Wins!"
  } else if (quantifyMove(userMove) < quantifyMove(aiMove)) {
    aiScore++;
    return "Computer Wins!"
  } else {
    draws++;
    return "It's a draw!"
  }
}

function quantifyMove(move) {
  switch (move) {
    case "paper":
      return 1;
    case "scissors":
      return 2;
    case "rock":
      return 3;
  }
}

module.exports = {
  computerMove,
  calculateWinner,
  returnUserScore,
  returnAiScore,
  returnDraws
}
