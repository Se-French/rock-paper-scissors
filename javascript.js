const options = ['rock', 'paper', 'scissors'];

function getComputerChoice(options){
    let randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}
//This function (above) will randomly return 'rock', 'paper', or 'scissors'
//Use this for computerSelection

const computerSelection = getComputerChoice(options);
console.log(computerSelection);

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

console.log (playerSelection);

//Using the above else...if statement makes the case 
//of the users input not matter, since the computer 
//uses all lower case options for its Selection. It 
//also makes all other values, including the cancel 
//button, invalid options for the game.

