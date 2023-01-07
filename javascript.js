function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

//let computerSelection = getComputerChoice();
//console.log (computerSelection);

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
 
function playRound(playerSelection, computerSelection){
        if ((playerSelection === 'rock' && computerSelection === 'scissors')
            ||(playerSelection === 'scissors' && computerSelection === 'paper')
            ||(playerSelection === 'paper' && computerSelection === 'rock')){
            return 'You win this round, ' + playerSelection + ' beats ' + computerSelection + '!';
        } else if ((playerSelection === 'scissors' && computerSelection === 'rock')
            ||(playerSelection === 'rock' && computerSelection === 'paper')
            ||(playerSelection === 'paper' && computerSelection === 'scissors')){
            return 'You lose this round, ' + computerSelection + ' beats ' + playerSelection + '!';
        } else if (playerSelection === computerSelection){
            return 'Wow, it\'s a tie!';
        } else {
            return 'Sorry, Invalid Option!';
    }
}

//console.log (playRound(playerSelection, computerSelection));

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
            if ((response === 'You win this round, rock beats scissors!')
                    || (response === 'You win this round, scissors beats paper!')
                    || (response === 'You win this round, paper beats rock!')){
                    playerScore = playerScore + 1;
                } else if ((response === 'You lose this round, rock beats scissors!')
                    || (response === 'You lose this round, paper beats rock!')
                    || (response === 'You lose this round, scissors beats paper!')){
                    computerScore = computerScore + 1;
                }
    }
            //console.log(playerScore);
            //console.log(computerScore);

    if (playerScore > computerScore){
        console.log('Congrats, you\'re the big game winner!');
    } else if (playerScore < computerScore){
        console.log('Sorry, you lose this game!');
    } else if (playerScore === computerScore){
        console.log('This game is a tie!');
    } else {
        console.log('Something went wrong!');
    }
}


game();
