var playerScore = 0, 
  computerScore = 0;
const maximumScore = 3;

const moves = ["rock", "paper", "scissors"];

function resetScores(){
  playerScore = 0;
  computerScore = 0;
}

function computerPlay(){
  const numberSelected = Math.floor(Math.random() * 3); //Random in the range from 0 to 2
  print("computer plays " + moves[numberSelected])
  return numberSelected;
}

function getMoveNumber(selectedMove){
  return moves.findIndex((move) => selectedMove.toLowerCase() === move);
}

function playerPlay(){
  var playerSelection,
  invalidInput;
  do{
    playerSelection = prompt("Enter 'rock', 'paper', or 'scissors'");
    invalidInput = !moves.includes(playerSelection.toLowerCase());
    if(invalidInput){
      print("input invalid. please try again");
    }
  } while (invalidInput);
  return playerSelection.toLowerCase();
}

function playRound(playerSelectionNumber, computerSelectionNumber){
  var playerState;
  const playerMoveNumber = playerSelectionNumber;
  const computerMoveNumber = computerSelectionNumber;
  const moveDifference = playerMoveNumber - computerMoveNumber;

  if(moveDifference == 1 || moveDifference == -2) {
    playerScore++;
    return `You win! ${moves[playerMoveNumber]} beats ${moves[computerMoveNumber]}!`;
  } else if(moveDifference == 0) {
    return `You tie! Both you and the computer played ${moves[playerMoveNumber]}`;
  } else {
    computerScore++;
    return `You lost! ${moves[computerMoveNumber]} beats ${moves[playerMoveNumber]}!`;
  }
}

function game(){
  resetScores();
  window.alert(`Let's play rock, paper, scissors! First to a score of ${maximumScore} wins!`);
  while(playerScore < maximumScore && computerScore < maximumScore){
    const playerSelection = prompt("Enter rock, paper, or scissors");
    window.alert(playRound(getMoveNumber(playerSelection), computerPlay()));
    window.alert(`Your score: ${playerScore}\nComputer's score: ${computerScore}`);
  }
  if(playerScore == maximumScore){
    window.alert(`You've reached ${maximumScore} points. YOU WIN!`);
  } else {
    window.alert(`Computer has reached ${maximumScore} points. GAME OVER!`);
  }
}