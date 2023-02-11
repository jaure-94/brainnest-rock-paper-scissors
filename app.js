const computerPlay = () => {
  const gameMoves = ['rock', 'paper', 'scissors'];
  let randomize = Math.floor(Math.random()*gameMoves.length);

  return gameMoves[randomize];
}

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection == 'rock' && computerSelection == 'rock') {
    console.log(`Draw.`);
    alert(`Draw`);
  } else
  if (playerSelection == 'rock' && computerSelection == 'paper') {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    alert(`You lost`);
  } else
  if (playerSelection == 'rock' && computerSelection == 'scissors') {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    alert(`You won`);
  } else
  if (playerSelection == 'paper' && computerSelection == 'paper') {
    console.log(`Draw.`);
    alert(`Draw`);
  } else
  if (playerSelection == 'paper' && computerSelection == 'rock') {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    alert(`You won`);
  } else
  if (playerSelection == 'paper' && computerSelection == 'scissors') {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    alert(`You lost`);
  } else
  if (playerSelection == 'scissors' && computerSelection == 'scissors') {
    console.log(`Draw.`);
    alert(`Draw`);
  } else
  if (playerSelection == 'scissors' && computerSelection == 'rock') {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    alert(`You lost`);
  } else
  if (playerSelection == 'scissors' && computerSelection == 'paper') {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    alert(`You won`);
  }
}

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  const rounds = 5;
  const message = "Type 'rock', 'paper' or 'scissors' to play:";
  const output_1 = "You lose! paper beats rock";
  const output_2 = "You lose! scissors beats paper";
  const output_3 = "You lose! rock beats scissors";
  const output_5 = "Draw.";
  const output_6 = "You win! rock beats scissors";
  const output_7 = "You win! paper beats rock";
  const output_8 = "You win! scissors beats paper";
  const winMessage = "Player wins game!";
  const loseMessage = "Computer wins game!";

  for (let i = 0; i < rounds; i++) {
    let playerMove = prompt(message);
    const result = playRound(playerMove, computerPlay());
    if (result == output_1 || output_2 || output_3) {
      computerScore++;
      console.log('Player: ', playerScore);
      console.log('Computer: ', computerScore);
    } else
    if (result == output_6 || output_7 || output_8) {
      playerScore++;
      console.log('Player: ', playerScore);
      console.log('Computer: ', computerScore);
    } else
    if (result = output_5) {
      continue;
    }
  }

  console.log('Player: ', playerScore);
  console.log('Computer: ', computerScore);

  if (playerScore > computerScore) {
    console.log(winMessage)
  } else
  if (computerScore > playerScore) {
    console.log(loseMessage);
  }
}

game();