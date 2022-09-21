const choices = ['rock', 'paper', 'scissors']
// create an array of choice automatically assigning the options 0-2 0 rock 1 paper 2 scissors 


function game() {
    //play the game
    //play five rounds
    //console based
}

function playerRound(){
    const playerSelection =  playerChoice()
    ;
    const computerSelection = computerChoice()
    ;
}

function playerChoice () {]
//get input from player
}

function computerChoice () {
    return choice[Math.floor(math.random()*choices.length)]
    //get random choice for computer
    //floor rounds DOWN to the closes whole number. random will give a random decimal between 0 and 1 then
    //multiplying that by the total length of the array (2) you can get a whole number 0 - 2
}