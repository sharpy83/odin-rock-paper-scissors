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

function getPlayerChoice(){
    let validatedInput = false;
    while (validatedInput == false){
        const choice = prompt("Rock, Paper or Scissors?");
        if(choice === null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }

}


function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
console.log("Hello!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        console.log("_______");
        if(checkWinner(playerSelection, computerSelection) === "Player"){
            scorePlayer++;
        }
        else if(checkWinner(playerSelection, computerSelection) === "Computer"){
            scoreComputer++;
        }
     }

     console.log("Game Over")
     if(scorePlayer > scoreComputer){
        console.log("You Win!");
     }
     else if(scorePlayer < scoreComputer){
        console.log("Computer Wins!");
     }
     else{
        console.log("Its a Draw!");
     }
}

game()