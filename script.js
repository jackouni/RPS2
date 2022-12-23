/*◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎
◼︎◼︎◼︎ Element Selections & Variables ◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎ */

const heading = document.querySelector('#heading')
const playerCounter = document.querySelector('#player-counter')
const compCounter = document.querySelector('#comp-counter')
const title = document.querySelector('#title')

const gameDisplay = document.querySelector('#game-display')

const rockIcon = document.querySelector('#rock')
const paperIcon = document.querySelector('#paper')
const scissorsIcon = document.querySelector('#scissors')
const allOptions = document.querySelectorAll('.selection')
console.log(allOptions)


const options = ["ROCK", "PAPER", "SCISSORS"]
const playerSelection = getPlayerChoice();
const compSelection = getCompChoice();

/*◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎
◼︎◼︎◼︎ Event Handlings ◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎ */

allOptions.forEach((option) => { // for each option we add a 'click' listener
    option.addEventListener('click', () => playRound());
  });


/*◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎
◼︎◼︎◼︎ Functions ◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎ */

function getCompChoice(){ // Gets the comp player's random selection of RPS
    const choice = options[Math.floor(Math.random() * options.length)] ;
    return choice ;
}
function getPlayerChoice(){ // Gets user's input of RPS 
    let InputValidated = false ; 
    while(InputValidated == false){ // Asks user for input 
        // const choice = prompt("Choose ---> ROCK, PAPER, SCISSORS");
        if (choice == null){ 
            continue;
        }
        const choiceInUpperCase = choice.toUpperCase(); // User Input is cap-insensitive
        if (options.includes(choiceInUpperCase)){ 
            InputValidated = true; 
            return choiceInUpperCase;
        }
    }

}
function checkRoundWinner(playerSelection, compSelection){ // Checks to see who won a round
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
function playRound(playerSelection, compSelection){ // Plays a round of RPS and evaluates winner
    console.log('playRound activated')
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
  /*  console.log("Welcome to Rock Paper Scissors")
    console.log("Choose ---> Rock, Paper, or Scissors")
    console.log("Best 3 of 5") */
    let roundCount = 0;
    let playerScore = 0;
    let compScore = 0;
    while(roundCount < 5) {
        const playerSelection = getPlayerChoice();
        const compSelection = getCompChoice();
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

