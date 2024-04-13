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
            return 0;
            
        }else{
            // console.log(`You win! ${playerSelection} beats ${computerSelection}`); 
            div.textContent = "You win! "+ playerSelection +" beats "+ computerSelection; 
            return 1
        }
    }else if(playerSelection === "Paper"){
        if(computerSelection === "Scissors"){
            // console.log(`You lose!${computerSelection} beats ${playerSelection}`); 
            div.textContent = "You lose! " + computerSelection + " beats "+ playerSelection;  
            return 0;
        }else{
            // console.log(`You win! ${playerSelection} beats ${computerSelection}`); 
            div.textContent = "You win! "+ playerSelection +" beats "+ computerSelection; 
            return 1
        }
    }else{
        if(computerSelection === "Rock"){
            // console.log(`You lose!${computerSelection} beats ${playerSelection}`); 
            div.textContent = "You lose! " + computerSelection + " beats "+ playerSelection;  
            return 0;
        }else{
            // console.log(`You win! ${playerSelection} beats ${computerSelection}`); 
            div.textContent = "You win! "+ playerSelection +" beats "+ computerSelection; 
            return 1
        }
    }
}
// function play5Rounds(){
//     var playerCount = 0;
//     var computerCount = 0;
//     for (var i = 1; i<6 ; i++){
//         console.log("Round ", i);
//         result = playRound(playerChoice(), getComputerChoice())
//         if (result === 1){
//             playerCount = playerCount + 1;
//         }else if (result === 0){
//             computerCount = computerCount + 1 ;
//         }else{}
//         console.log("Score: Player: ",playerCount," Computer: ", computerCount);
//     }
//     if (playerCount > computerCount){
//         return "You Win!";
//     }else{
//         return "You Lose!";
//     }
// }
// Add a div for displaying results and change all of your console.logs into DOM methods.

const div = document.querySelector("#result");

// Buttons
const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click',() => {
    playRound("Rock",getComputerChoice())
})

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click',() => {
    playRound("Paper",getComputerChoice())
})

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click',() => {
    playRound("Scissors",getComputerChoice())
})

