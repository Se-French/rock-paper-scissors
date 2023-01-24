function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

const buttons = document.querySelectorAll('button'); 
buttons.forEach(button => button.addEventListener('click', playRound));
let computerScore = 0;
let playerScore = 0;

function playRound(event){
    const divRound = document.querySelector('div#eachRound');
    const game = document.querySelector('div#game');
    const cScore = document.querySelector('div#computerScore');
    const pScore = document.querySelector('div#playerScore');
    let computerSelection = getComputerChoice();
    let playerSelection = event.target.id;
    let reset = '';

        if ((playerSelection === 'rock' && computerSelection === 'scissors')
            ||(playerSelection === 'scissors' && computerSelection === 'paper')
            ||(playerSelection === 'paper' && computerSelection === 'rock')){
          divRound.textContent =  'You win, ' + playerSelection + ' beats ' + computerSelection + '!';
          playerScore = playerScore + 1;
        } else if ((playerSelection === 'scissors' && computerSelection === 'rock')
            ||(playerSelection === 'rock' && computerSelection === 'paper')
            ||(playerSelection === 'paper' && computerSelection === 'scissors')){
          divRound.textContent = 'You lose, ' + computerSelection + ' beats ' + playerSelection + '!';
          computerScore = computerScore + 1;
        } else if (playerSelection === computerSelection){
          divRound.textContent = 'Wow, it\'s a tie!';
        } else {
          divRound.textContent = 'Click a button!';
        }

        if (computerScore < 5 && playerScore < 5){
            game.textContent = 'Keep playing, first to 5 wins!';
            reset = '';
        } else if (computerScore == 5 && playerScore == 5){
            game.textContent = 'This game is a tie';
            reset = '';
        } else if (computerScore == 5 && playerScore < 5){
            game.textContent = 'The computer wins this game!';
            reset = 'reset';
        } else if (computerScore < 5 && playerScore == 5){
            game.textContent = 'You win this game!';
            reset = 'reset';
        }

        cScore.textContent = computerScore;
        pScore.textContent = playerScore;

        if (reset === 'reset'){
            computerScore = 0;
            playerScore = 0;
        }
}