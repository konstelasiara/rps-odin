function getHumanChoice() {
  let humanPrompt =  prompt("You may enter your choice");
  return humanPrompt.charAt(0).toUpperCase() +
  humanPrompt.slice(1).toLowerCase();
}

function getComputerChoice() {
  let numOfChoices = 3;
  let numRes = Math.floor(Math.random() * numOfChoices);
  let optComputer = ["Rock", "Paper", "Scissors"];
  return optComputer[numRes];
}

// to contain values from functs above
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log(humanChoice);
console.log(computerChoice);

console.log(`You chose ${humanChoice}, Computer chose ${computerChoice}`) //retrieve it in template literals

function playRound() {
  if (humanChoice === "Rock" && computerChoice === "Scissors" ||
    humanChoice === "Paper" && computerChoice === "Rock" ||
    humanChoice === "Scissors" && computerChoice === "Paper") {
      return "Congrats! You win!"
    } else if (humanChoice === "Scissors" && computerChoice === "Rock" ||
      humanChoice === "Rock" && computerChoice === "Paper" ||
      humanChoice === "Paper" && computerChoice === "Scissors") {
        return "Uh oh! You lose!"
      } else {
        return "It's a draw!"
      }

}

playRound();
let resultRound =  playRound();
console.log(resultRound);

// function playGame() {
  
// }

// playGame();
// console.log(playGame());