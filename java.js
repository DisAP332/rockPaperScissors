const choices = ['rock' , 'paper', 'scissors'];
const winners= [];

function game() {
    for (let i =1; i <=4; i++) { //round is i, start at round 1, go up until round 5, increase round by 1 until round is less than or equal to 5
        playRound(i); 
    }
    logWins(); //call function logWins
    if (i = 4) {
        whoWon();
    }
}

function playRound(round){
    const playerSelection = playerChoice(); //call out playerSelection value from function playerChoice
    const computerSelection = computerChoice(); //call out computerChoice from function computerChoice
    const winner = checkWinner(playerSelection, computerSelection);  //make the const winner the returned value from function checkWinner
    // choiceP will equal playerSelection and choiceC will equal computerSelection.
    winners.push(winner); //when winner is determined add result to array of winners *SEE LINE 2*
    logRound(playerSelection,computerSelection,winner,round) //pass the variables down to logRound function
    whoWon(playerWins, Ties);
}
playRound()







function playerChoice() {
    let input = prompt('Type Rock, Paper, Scissors'); //prompt user to enter rock, paper, or scissors

    if (input == null) { 
        input = prompt('Type Rock, Paper, or Scissors');
    } // if the user clicks cancel aka input being the same as null reprompt for a input.

    input = input.toLowerCase(); //change input to lowercase before checking to see if input is same desiered answers in array

    let checkedInput = validateInput(input); //input will become choice in function if true, continue, if false reprompt with futher instructions.

    while (checkedInput == false) {
        input = prompt(
            'type Rock, Paper, or Scissors. Spelling needs to be exact, capitlization doesnt matter'
        );
        while (input == null) {
            input = prompt('Type Rock, Paper, or Scissors');
    }
    input = input.toLowerCase(); //make sure that input is not cap sensitive for last time
    checkedInput = validateInput(input); // break that loop
    } // closes out the while seen above on line 24
    return input; //return the players input
}







function validateInput(choice){
    return choices.includes(choice); //compare playChoice which is the same as 'input' which is called out in the function 'playerChoice'
    // to ensure it is the same as the given values of 'choices' *SEE LINE 1* then if true return value to continue function
}








function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
    //get a random num between 0-1 tims by 3 aka array length so that number is between 0-2.9 and floor will round down so we can get 0, 1, 2 to meet the array of choice 
    //called out in 'choices' SEE LINE 1
}







function checkWinner (choiceP, choiceC) {
    if (choiceP === choiceC) {
        return 'Tie'; // if the player and computer choice are the same it is a tie
    } else if (
        (choiceP === 'rock' && choiceC == 'scissors') ||
        (choiceP === 'scissors' && choiceC == 'paper') ||
        (choiceP === 'paper' && choiceC == 'rock')
        // states the winning pairs agianst the computer and if true return Player aka player win
    ) {
        return 'Player'; //returns the player won
    } else {
        return 'Computer'; //if above returns false return computer for the computer won
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == 'Player').length; 
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    console.log('Results;')
    console.log('Player Wins:', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log('Ties:', ties);
}


function logRound(playerChoice, computerChoice, winner, round){
    console.log('Round:', round);
    console.log('Player chose:', playerChoice);
    console.log('Computer chose:', computerChoice);
    console.log(winner, 'Won the Round');
    console.log('--------------------------------------');
}

function whoWon(ties, playerWins){
    if (ties >= 3) {
    console.log ('its a Tie!');
    }
    else if (playerWins <= 3) {
    console.log ('Computer Won!');
    }
    else if (playerWins >= 3) {
    console.log ('Player Won!')
    }

}

game(); //call function game and play the game.