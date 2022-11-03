// Variables
    const choices = ["ROCK", "PAPER", "SCISSORS"] ;
    const compSelection = getCompChoice() ;
    const playerSelection = getPlayerChoice().toUpperCase();
    const roundWinLossMsg = checkRoundWinner(playerSelection, compSelection);


    const playerScoreHolder = playerScore(playerSelection, compSelection) ; 
    let x = 0
    const compScoreHolder = compScore(playerSelection, compSelection) ;
    let y = 0




// Functions

function checkRoundWinner(playerSelection, compSelection) {
    // Evaluates who won/loss in a round
    if ((playerSelection === "ROCK" && compSelection === "SCISSORS")
    || (playerSelection === "PAPER" && compSelection === "ROCK")
    || (playerSelection === "SCISSORS" && compSelection === "PAPER")) {
        return "YOU WON!"
    } else if ((playerSelection === "ROCK" && compSelection === "PAPER")
    || (playerSelection === "PAPER" && compSelection === "SCISSORS")
    || (playerSelection === "SCISSORS" && compSelection === "ROCK")) {
        return "COMPUTER WON."
    } else if  (playerSelection === compSelection){
        return "TIED"
    } 
}
function playerScore(playerSelection, compSelection) {
    // Evaluates if player won or loss and adds score
    if ((playerSelection === "ROCK" && compSelection === "SCISSORS")
    || (playerSelection === "PAPER" && compSelection === "rock")
    || (playerSelection === "SCISSORS" && compSelection === "PAPER")) {
        return 1
    } else if ((playerSelection === "ROCK" && compSelection === "PAPER")
    || (playerSelection === "PAPER" && compSelection === "SCISSORS")
    || (playerSelection === "SCISSORS" && compSelection === "ROCK")) {
        return 0
    } else if  (playerSelection === compSelection){
        return 0
    } 
}
function compScore(playerSelection, compSelection) {
    // Evaluates if computer won/loss and adds to score
    if ((playerSelection === "ROCK" && compSelection === "SCISSORS")
    || (playerSelection === "PAPER" && compSelection === "ROCK")
    || (playerSelection === "SCISSORS" && compSelection === "PAPER")) {
        return 0
    } else if ((playerSelection === "ROCK" && compSelection === "PAPER")
    || (playerSelection === "PAPER" && compSelection === "SCISSORS")
    || (playerSelection === "SCISSORS" && compSelection === "ROCK")) {
        return 1
    } else if (playerSelection === compSelection){
        return 0
    }
}
function getCompChoice() {
    // Get's the computer's random choice of RPS
        return choices[Math.floor(Math.random() * choices.length)] 
}
function getPlayerChoice() {
    // Uses prompt() to get player's input.
    return prompt("Choose---> Rock, Paper, or Scissors") ;
}
function roundOutcome(playerSelection, compSelection) {
    // Displays the results of a round

        return `You Chose: ${playerSelection} \n 
        Comp Chose: ${compSelection} \n
        Winner: ${roundWinLossMsg}\n
        Your Score: ${x += playerScoreHolder} \n
        Comp Score: ${y += compScoreHolder} \n
        ------------------------------------`
    
} 

console.log(roundOutcome());













