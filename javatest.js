let playerScore = 0
let computerScore = 0
let roundWinner = ''
let round = 0

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
        console.log('tie');
      }
      if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
      ) {
        roundWinner = 'player'
        playerScore++
        console.log('Player wins!')
      }
      if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
      ) {
        roundWinner = 'computer'
        computerScore++
        console.log('Computer wins!')
      }
      round++
      getRandomChoice();
      updateScore();
}
//UI Stoof
const playerChoiceBox = document.getElementById('playerChoiceBox');
const buttonRock = document.getElementById('buttonRock');
const buttonScissors = document.getElementById('buttonScissors');
const pScoreBox = document.getElementById('pScoreBox');
const cScoreBox = document.getElementById('cScoreBox');
const playerChoiceDisplay = document.getElementById('playerChoiceDisplay');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay')
const testButton = document.getElementById('testButton');
const winBox = document.getElementById('winBox');
const roundBox = document.getElementById('roundBox');


//get the players Selection through a click
buttonRock.addEventListener('click' ,() => handleClick('ROCK'))
buttonPaper.addEventListener('click' ,() => handleClick('PAPER'))
buttonScissors.addEventListener('click' ,() => handleClick('SCISSORS'))

testButton.addEventListener('click', () => playRound())

//generate random number for the Comp Selection
function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'ROCK'
        case 1: 
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }
    updateChoices(computerSelection);
}
const computerSelection = getRandomChoice();


function handleClick(playerSelection){
    switch (playerSelection) {
        case 'ROCK':
        playerChoiceDisplay.textContent = '✊'
        break
        case 'PAPER':
        playerChoiceDisplay.textContent = '✋'
        break
        case 'SCISSORS':
        playerChoiceDisplay.textContent = '✌'
        break
    }
    const computerSelection = getRandomChoice();
    updateChoices(computerSelection)
    playRound(playerSelection, computerSelection);
    
}

function updateChoices(computerSelection) {
    switch (computerSelection) {
        case 'ROCK':
        computerChoiceDisplay.textContent = '✊'
        break
        case 'PAPER':
        computerChoiceDisplay.textContent = '✋'
        break
        case 'SCISSORS':
        computerChoiceDisplay.textContent = '✌'
        break
    }
}

function updateScore() {
    if (roundWinner === 'tie') {
        winBox.textContent = 'its a Tie!'
    } else if (roundWinner === 'player') {
        winBox.textContent = 'Player Win!'
        pScoreBox.textContent = 'Player Score: ' + playerScore;
    } else if (roundWinner === 'computer') {
        winBox.textContent = 'Computer Win!'
        cScoreBox.textContent = 'Computer Score: ' + computerScore;
    }
    roundBox.textContent='Round: ' + round;
}