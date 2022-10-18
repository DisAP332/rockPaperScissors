
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





const playerChoiceBox = document.getElementById('playerChoiceBox');
const roundDisplay = document.getElementById('roundDisplay');
const compChoice = document.getElementById('compChoice');
const buttonRock = document.getElementById('buttonRock');
const buttonScissors = document.getElementById('buttonScissors');
const scoreBoard = document.getElementById('scoreBoard');
const pScoreBox = document.getElementById('pScoreBox');
const cScoreBox = document.getElementById('cScoreBox');

//get the players Selection through a click here.
buttonRock.addEventListener('click' ,() => handleClick('ROCK'))
buttonPaper.addEventListener('click' ,() => handleClick('PAPER'))
buttonScissors.addEventListener('click' ,() => handleClick('SCISSORS'))

function handleClick(playerSelection){

}

function updateChoices(playerSelction, computerSelection);