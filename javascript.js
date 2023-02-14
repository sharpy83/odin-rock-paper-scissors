console.log("test")

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
   const choice = options[Math.floor(Math.random() * options.length)];
   return choice;
   
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Draw"
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection ==="paper" && computerSelection === "rock")
    ){
    
        return "Player"
    }
    else{
        return "Computer"
    }
}

function playRound(playerSelection , computerSelection){
    const result = checkWinner(playerSelection,computerSelection);
    if(result === "Draw"){
        return "It's a Draw!"
    }
    else if (result ==="Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `Unlucky, You Lose! ${computerSelection} beats ${playerSelection}`
    }
}


const playerSelection ="rock"
const computerSelection= getComputerChoice();
console.log(playRound(playerSelection,computerSelection));