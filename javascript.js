//This function will randomly return 'rock', 'paper', or 'scissors'
//Use this for computerSelection

function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    let randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}

const computerSelection = getComputerChoice();
//console.log(computerSelection);

//Below is where we get the value for playerSelection
 
 const playerChoice = prompt("Choose rock, paper, or scissors!");

if (playerChoice === null){
    playerSelection = 'Invalid Option';
}else if (playerChoice.toLowerCase() === 'rock'){
    playerSelection = 'rock';
}else if (playerChoice.toLowerCase() === 'paper'){
    playerSelection = 'paper';
}else if (playerChoice.toLowerCase() === 'scissors'){
    playerSelection = 'scissors';
}else{
    playerSelection = 'Invalid Option';
}    

//console.log (playerSelection);

//The following function plays a single round of the game and includes results
//for all possible outcomes 

function playRound(playerSelection, computerSelection){
        if (playerSelection === 'rock' && computerSelection === 'scissors'){
            return 'You win! Rock beats Scissors';
        } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
            return 'You win! Scissors beats Paper';
        } else if (playerSelection === 'paper' && computerSelection === 'rock'){
            return 'You win! Paper beats Rock';
        } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
            return 'You lose! Rock beats Scissors';
        } else if (playerSelection === 'rock' && computerSelection === 'paper'){
            return 'You lose! Paper beats Rock';
        } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
            return 'You lose! Scissors beats Paper';
        } else if ((playerSelection === 'paper' && computerSelection === 'paper')
                || (playerSelection === 'rock' && computerSelection === 'rock')
                || (playerSelection === 'scissors' && computerSelection === 'scissors')){
            return 'Wow, it\'s a tie!';
        } else {
            return 'Sorry, Invalid Option!';  
    }
}

console.log(playRound(playerSelection, computerSelection));