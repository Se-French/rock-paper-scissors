//This function will randomly return 'rock', 'paper', or 'scissors'
//Use this for computerSelection

function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    let randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}

//let computerSelection = getComputerChoice();
//console.log(computerSelection);

//Below is where we get the value for playerSelection

function getPlayerChoice(){
    const playerChoice = prompt("Choose rock, paper, or scissors!");

    if (playerChoice === null){
        return 'Invalid Option';
    }else if (playerChoice.toLowerCase() === 'rock'){
        return 'rock';
    }else if (playerChoice.toLowerCase() === 'paper'){
        return 'paper';
    }else if (playerChoice.toLowerCase() === 'scissors'){
        return 'scissors';
    }else{
        return 'Invalid Option';
        }  
    }

//let playerSelection = getPlayerChoice();

//console.log (playerSelection);

//The following function plays a single round of the game and includes results
//for all possible outcomes 

function playRound(playerSelection, computerSelection){
        if (playerSelection === 'rock' && computerSelection === 'scissors'){
            return 'You win this round! Rock beats Scissors';
        } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
            return 'You win this round! Scissors beats Paper';
        } else if (playerSelection === 'paper' && computerSelection === 'rock'){
            return 'You win this round! Paper beats Rock';
        } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
            return 'You lose this round! Rock beats Scissors';
        } else if (playerSelection === 'rock' && computerSelection === 'paper'){
            return 'You lose this round! Paper beats Rock';
        } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
            return 'You lose this round! Scissors beats Paper';
        } else if ((playerSelection === 'paper' && computerSelection === 'paper')
                || (playerSelection === 'rock' && computerSelection === 'rock')
                || (playerSelection === 'scissors' && computerSelection === 'scissors')){
            return 'Wow, it\'s a tie!';
        } else {
            return 'Sorry, Invalid Option!';
    }
}

//console.log (playRound(playerSelection, computerSelection));

//Below is a function to create a 5 round game and return the winner

function game(){

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i<5; i++){
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        let response = (playRound(playerSelection, computerSelection));
        console.log(response);
        //console.log(computerSelection);
        //console.log(playerSelection);

//Keep score

        if ((response === 'You win this round! Rock beats Scissors')
            || (response === 'You win this round! Scissors beats Paper')
            || (response === 'You win this round! Paper beats Rock')){
            playerScore = playerScore + 1;
        } else if ((response === 'You lose this round! Rock beats Scissors')
            || (response === 'You lose this round! Paper beats Rock')
            || (response === "You lose this round! Scissors beats Paper")){
            computerScore = computerScore + 1;
        }
    }
            //console.log(playerScore);
            //console.log(computerScore);

    if (playerScore > computerScore){
        console.log('Congrats, you\'re the big winner!');
    } else if (playerScore < computerScore){
        console.log('Sorry, you lose this game!');
    } else if (playerScore === computerScore){
        console.log('Somehow it\'s a tie!');
    } else {
        console.log('Something went wrong!');
    }
}


game();
