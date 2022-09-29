const choices = ['rock', 'paper', 'scissors']
;
// create an array of choice automatically assigning the options 0-2 0 rock 1 paper 2 scissors 


function game() {
    for(let i = 0; i <= 5; i++ ){
        playRound()
        ;
    }
    //play the game
    //play five rounds
    //console based
}

function playRound(){
    const playerSelection =  playerChoice()
    ;
    const computerSelection = computerChoice()
    ;
    const winner = checkWinner(playerSelection, computerSelection)
    ;
}

function playerChoice () {
    let input = prompt('Type Rock, Paper, or Scissors')
    ;
    // this makes it so the browser will expect a answer if one is not put in prompt. LOOP
    while(input == null) {
        input = prompt('Type Rock, Paper, or Scissors')
        ;
    }
    input = input.toLowerCase()
    ;
    let check = validateInput(input)
    ;
    while (check == false) {
        input = prompt(
            'type Rock, Paper, or Scissors. Spelling needs to be exact, capitlization doesnt matter'
        )
        ;
        while(input == null) {
            input = prompt('Type Rock, Paper, or Scissors')
        }
        ;
        //follow is to confirm that it will still make input lowercase
        input = input.toLowerCase()
        ;
        //run validateInput function to ensure that input is a valid option
        check = validateInput(input)
        ;
    }
    return input
    ;
}
//get input from player, break loop
playerChoice();
function computerChoice () {
    return choices[Math.floor(Math.random() * choices.length)]
    ;
    //get random choice for computer
    //floor rounds DOWN to the closes whole number. random will give a random decimal between 0 and 1 then
    //multiplying that by the total length of the array (2) you can get a whole number 0 - 2
}

function validateInput(choice){
    if (choices.includes(choice)) {
        return true
        ;
    } return false
    ;
}
//end function validateInput

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return 'tie'
        ;
    } else if (
        (choiceP === 'rock' && choiceC =='scissors') || 
        (choiceP === 'scissors' && choiceC =='paper') || 
        (choiceP === 'paper' && choiceC =='rock')
        ) {
        return 'player wins'
        ;
        } else {
        return 'computer wins'
        ;
        }
}
//end function checkWinner
console.log(playerChoice)
;

game()
;