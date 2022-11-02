//const choices = ["rock", "paper", "scissors"] ;
let compSelection = "paper" ;
//let userInput = prompt('Choose --> Rock, Paper, or Scissors')
let playerSelection = "paper" ;
let roundWinLossMsg = checkRoundWinner(playerSelection, compSelection)




function checkRoundWinner(playerSelection, compSelection) {
    // Evaluates who won/loss in a round
    if ((playerSelection === "rock" && compSelection === "scissors")
    || (playerSelection === "paper" && compSelection === "rock")
    || (playerSelection === "scissors" && compSelection === "paper")) {
        return "You Won!"
    } else if ((playerSelection === "rock" && compSelection === "paper")
    || (playerSelection === "paper" && compSelection === "scissors")
    || (playerSelection === "scissors" && compSelection === "rock")) {
        return "Computer Won."
    } else if  ((playerSelection === "rock" && compSelection === "rock")
    || (playerSelection === "paper" && compSelection === "paper")
    || (playerSelection === "scissors" && compSelection === "scissors")) {
        return "Tied"
    } 
}

function getCompChoice() {
    // Get's the computer's random choice of RPS
}

function playRound(playerSelection, compSelection) {
    // Plays a single round of RPS 
    // 1) Asks prompt for userInput 
    // 2) Displays round #, player choice, comp choice, Winner/Loser message
        console.log(`Round: ROUND NUMBER \n
        You Chose: ${playerSelection} \n 
        Computer Chose: ${compSelection} \n
        Winner: ${roundWinLossMsg}\n
        ------------------------------------`)
   //  3) Shows scores 
}

function game() {
    /* This is where we will run a full game of RPS (5 rounds)
    1) Calls playRound function
    2) Plays 5 rounds (loops the playRound function 5 times
    3) Declares the winner with message at the end of the 5 rounds */
    
}

playRound(playerSelection, compSelection);


