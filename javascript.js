const options = ['rock', 'paper', 'scissors']; 

function getComputerChoice(options){
    let randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}
//This function will randomly return 'rock', 'paper', or 'scissors'

 console.log (getComputerChoice(options));
