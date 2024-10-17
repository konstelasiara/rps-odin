function getHumanChoice() {
  let acceptedChoices = ["Rock", "Paper", "Scissors"];
  let humanPrompt;

  // checking if the input is valid
  do {
    humanPrompt = prompt("You may enter your choice: Rock, Paper, or Scissors").toLowerCase();
    humanPrompt = humanPrompt.charAt(0).toUpperCase() + humanPrompt.slice(1).toLowerCase();
  } while (!acceptedChoices.includes(humanPrompt))
  
  return humanPrompt;
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

let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

console.log(humanChoice);
console.log(computerChoice);

console.log(`You chose ${humanChoice}, Computer chose ${computerChoice}`) //retrieve it in template literals

function playRound() {
  if (humanChoice === "Rock" && computerChoice === "Scissors" ||
    humanChoice === "Paper" && computerChoice === "Rock" ||
    humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++
        return "Congrats! You win!"
    } else if (humanChoice === "Scissors" && computerChoice === "Rock" ||
      humanChoice === "Rock" && computerChoice === "Paper" ||
      humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore++
        return "Uh oh! You lose!"
      } else {
        drawScore++
        return "It's a draw!"
      }

}

console.log(playRound());

console.log(`Your score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);
console.log(`Draw tally: ${drawcore}`);