function getComputerChoice(){
    var choice = Math.floor(Math.random()*3);
    switch(choice){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Tie";
    }else if(playerSelection === "Rock"){
        if(computerSelection === "Paper"){
            return `You lose!${computerSelection} beats ${playerSelection}`;
        }else{
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }else if(playerSelection === "Paper"){
        if(computerSelection === "Scissors"){
            return `You lose!${computerSelection} beats ${playerSelection}`;
        }else{
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }else{
        if(computerSelection === "Rock"){
            return `You lose!${computerSelection} beats ${playerSelection}`;
        }else{
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    }
}
const playerInput = prompt("Choose rock, paper or scissors: ").toLowerCase();
var playerChoice = playerInput.charAt(0).toUpperCase + playerInput.slice(1);
console.log(playRound("Scissors",getComputerChoice()))
// console.log(getComputerChoice())