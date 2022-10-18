let playerScore = 0
let computerScore = 0
let roundWinner = ''

//UI Stoof
const playerChoiceBox = document.getElementById('playerChoiceBox');
const roundDisplay = document.getElementById('roundDisplay');
const compChoice = document.getElementById('compChoice');
const buttonRock = document.getElementById('buttonRock');
const buttonScissors = document.getElementById('buttonScissors');
const scoreBoard = document.getElementById('scoreBoard');
const pScoreBox = document.getElementById('pScoreBox');
const cScoreBox = document.getElementById('cScoreBox');
const playerChoiceDisplay = document.getElementById('playerChoiceDisplay');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay')
const testButton = document.getElementById('testButton');
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
}

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
    
    console.log(playerSelection);
}

const computerSelection = getRandomChoice();

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
console.log(computerSelection);
updateChoices();

function playRound(playerSelection, computerSelection) {
    if (testButton){
    if (playerSelection === computerSelection) {
        console.log('We got a block on playRound Cappin')
      }
      if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
      ) {
        playerScore++
        console.log('Player wins!')
      }
      if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
      ) {
        console.log('Computer wins!')
      }
    }
}