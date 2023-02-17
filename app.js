const computerPlay = () => {
  const gameMoves = ['rock', 'paper', 'scissors']
  let randomize = Math.floor(Math.random()*gameMoves.length)

  return gameMoves[randomize]
}

const sanitizeInput = (input) => {
  if (input) {
    return input.toString().toLowerCase().trim()
  }
}

const playRound = (playerSelection, computerSelection) => {
  const cleanPlayerSelection = sanitizeInput(playerSelection)
  const cleanComputerSelection = sanitizeInput(computerSelection)

  if (cleanPlayerSelection == 'rock' && cleanComputerSelection == 'rock') {
    return `Draw.`
  } else if (cleanPlayerSelection == 'rock' && cleanComputerSelection == 'paper') {
    return `You lose! ${cleanComputerSelection} beats ${cleanPlayerSelection}`
  
  } else if (cleanPlayerSelection == 'rock' && cleanComputerSelection == 'scissors') {
    return `You win! ${cleanPlayerSelection} beats ${cleanComputerSelection}`
  
  } else if (cleanPlayerSelection == 'paper' && cleanComputerSelection == 'paper') {
    return `Draw.`
  
  } else if (cleanPlayerSelection == 'paper' && cleanComputerSelection == 'rock') {
    return `You win! ${cleanPlayerSelection} beats ${cleanComputerSelection}`
  
  } else if (cleanPlayerSelection == 'paper' && cleanComputerSelection == 'scissors') {
    return `You lose! ${cleanComputerSelection} beats ${cleanPlayerSelection}`
  
  } else if (cleanPlayerSelection == 'scissors' && cleanComputerSelection == 'scissors') {
    return `Draw.`
  
  } else if (cleanPlayerSelection == 'scissors' && cleanComputerSelection == 'rock') {
    return `You lose! ${cleanComputerSelection} beats ${cleanPlayerSelection}`
  
  } else if (cleanPlayerSelection == 'scissors' && cleanComputerSelection == 'paper') {
    return `You win! ${cleanPlayerSelection} beats ${cleanComputerSelection}`
  
  } else {
    return 'Invalid input. Try again.'
  }
}

const game = () => {
  let playerScore = 0
  let computerScore = 0
  const rounds = 5
  const message = "Type 'rock', 'paper' or 'scissors' to play:"
  const winMessage = "Game Over! Player wins game!"
  const loseMessage = "Game Over! Computer wins game!"

  for (let i = 0; i < rounds; i++) {
    let playerMove = prompt(message, 'rock')
    const result = playRound(playerMove, computerPlay())
    
    switch (result) {
      case "You lose! paper beats rock":
        computerScore++
        console.log("You lose! paper beats rock")
        console.log('Player: ', playerScore)
        console.log('Computer: ', computerScore)
        console.log(`Round ${i+1}: Computer wins.`)
        break
      case "You lose! scissors beats paper":
        computerScore++
        console.log("You lose! scissors beats paper")
        console.log('Player: ', playerScore)
        console.log('Computer: ', computerScore)
        console.log(`Round ${i+1}: Player wins.`)
        break
      case "You lose! rock beats scissors":
        computerScore++
        console.log("You lose! rock beats scissors")
        console.log('Player: ', playerScore)
        console.log('Computer: ', computerScore)
        console.log(`Round ${i+1}: Player wins.`)
        break
      case "You win! rock beats scissors":
        playerScore++
        console.log("You win! rock beats scissors")
        console.log('Player: ', playerScore)
        console.log('Computer: ', computerScore)
        console.log(`Round ${i+1}: Player wins.`)
        break
      case "You win! paper beats rock":
        playerScore++
        console.log("You win! paper beats rock")
        console.log('Player: ', playerScore)
        console.log('Computer: ', computerScore)
        console.log(`Round ${i+1}: Player wins.`)
        break
      case "You win! scissors beats paper":
        playerScore++
        console.log("You win! paper beats rock")
        console.log('Player: ', playerScore)
        console.log('Computer: ', computerScore)
        console.log(`Round ${i+1}: Player wins.`)
        break
      case "Invalid input. Try again.":
        console.log("Invalid input. Try again.")
        break
      case "Draw.":
        console.log("Draw. Continue playing.")
        continue
      default:
        return
    }
  }

  console.log('Player: ', playerScore)
  console.log('Computer: ', computerScore)

  if (playerScore > computerScore) {
    console.log(winMessage)
    
  } else if (computerScore > playerScore) {
    console.log(loseMessage)
  } else {
    console.log('Tie Game!')
  }
}

game()
