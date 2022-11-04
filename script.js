const options = ["ROCK", "PAPER", "SCISSORS"]

function getCompChoice(){
    const choice = options[Math.floor(Math.random() * options.length)] ;
    return choice ;
}
function getPlayerChoice(){
    let InputValidated = false ;
    while(InputValidated == false){
        const choice = prompt("Choose ---> ROCK, PAPER, SCISSORS");
        if (choice == null){
            continue;
        } 
        const choiceInUpperCase = choice.toUpperCase();
        if (options.includes(choiceInUpperCase)){
            InputValidated = true;
            return choiceInUpperCase;
        }
    }

}
function checkRoundWinner(playerSelection, compSelection){
    if (playerSelection === compSelection) {
        return "TIE"
    } else if ((playerSelection === "ROCK" && compSelection == "SCISSORS")
    || (playerSelection == "PAPER" && compSelection == "ROCK")
    || (playerSelection == "SCISSORS" && compSelection == "PAPER")) {
        return "PLAYER"
    } else {
        return "COMP" 
    }
}
function playRound(playerSelection, compSelection){
    const result = checkRoundWinner(playerSelection, compSelection);
    if (result == "PLAYER") {
        return `You won! Your ${playerSelection} beats the computer's ${compSelection}!`
    } else if (result == "TIE") {
        return "You tied with the computer"
    } else {
        return `You lost. The computer's ${compSelection} beats your ${playerSelection}!`
    }
}
function game(){
    console.log("Welcome to Rock Paper Scissors")
    let roundCount = 0;
    let playerScore = 0;
    let compScore = 0;
    while(roundCount < 5) {
        /*const playerSelection = getPlayerChoice();
        const compSelection = getCompChoice();*/
        console.log(playRound(playerSelection, compSelection));
        console.log("-----------------")
        if (checkRoundWinner(playerSelection, compSelection) == "PLAYER"){
            playerScore++; 
            roundCount++
        } else if (checkRoundWinner(playerSelection, compSelection) == "COMP"){
            compScore++; 
            roundCount++;
        } 
    }
    if (playerScore > compScore){
        console.log(`You won the game with a score of ${playerScore} to ${compScore}`)
    } else if (playerScore < compScore){
        console.log(`You lost the game with a score of ${compScore} to ${playerScore}`)
    }
}

game();

const playerSelection = getPlayerChoice();
const compSelection = getCompChoice();














