var compScore = 0;
var playerScore = 0;
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
function playerChoice(){
    var playerInput = prompt("Choose rock, paper or scissors: ").toLowerCase();
    var playerChoice = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
    return playerChoice;
}
function playRound(playerSelection, computerSelection){
    
    if (playerSelection === computerSelection){
        // console.log(`Tie! Both used ${playerSelection}`);
        div.textContent = "Tie! Both used "+ playerSelection;  
    }else if(playerSelection === "Rock"){
        if(computerSelection === "Paper"){
            // console.log(`You lose!${computerSelection} beats ${playerSelection}`); 
            div.textContent = "You lose! " + computerSelection + " beats "+ playerSelection;  
            compScore++
            
        }else{
            // console.log(`You win! ${playerSelection} beats ${computerSelection}`); 
            div.textContent = "You win! "+ playerSelection +" beats "+ computerSelection; 
            playerScore++
        }
    }else if(playerSelection === "Paper"){
        if(computerSelection === "Scissors"){
            // console.log(`You lose!${computerSelection} beats ${playerSelection}`); 
            div.textContent = "You lose! " + computerSelection + " beats "+ playerSelection;  
            compScore++
        }else{
            // console.log(`You win! ${playerSelection} beats ${computerSelection}`); 
            div.textContent = "You win! "+ playerSelection +" beats "+ computerSelection; 
            playerScore++
        }
    }else{
        if(computerSelection === "Rock"){
            // console.log(`You lose!${computerSelection} beats ${playerSelection}`); 
            div.textContent = "You lose! " + computerSelection + " beats "+ playerSelection;  
            compScore++
        }else{
            // console.log(`You win! ${playerSelection} beats ${computerSelection}`); 
            div.textContent = "You win! "+ playerSelection +" beats "+ computerSelection; 
            playerScore++
        }
    }
    console.log("1", playerScore, "2", compScore)
}
const checkForWinner = (playerScore,compScore)=>{
    p.innerText= "Player score "+ playerScore + ", Computer score "+compScore;
    if(playerScore === 5){
        p.innerText = "You Won"
        playerScore = 0
        compScore = 0

    }else if(compScore ===5){
        p.innerText = "You Lose"
        playerScore = 0
        compScore = 0
    }

}

// Add a div for displaying results and change all of your console.logs into DOM methods.

const div = document.querySelector("#result");
const counter= document.querySelector("#counter")
const p = document.createElement("p")

counter.appendChild(p)

// Buttons
const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click',() => {
    playRound("Rock",getComputerChoice())
    checkForWinner(playerScore, compScore)
  
})

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click',() => {
    playRound("Paper",getComputerChoice())
    checkForWinner(playerScore, compScore)
    
})

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click',() => {
    playRound("Scissors",getComputerChoice())
    checkForWinner(playerScore, compScore)
    
})

