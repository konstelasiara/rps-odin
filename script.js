function getHumanChoice() {
  let humanPrompt =  prompt("You may enter your choice");
  return humanPrompt.charAt(0).toUpperCase() +
  humanPrompt.slice(1).toLowerCase();
}

function getComputerChoice() {
  let numOfChoices = 3;
  return Math.floor((Math.random() * numOfChoices) + 1);
}

// to contain values from functs above
let humanChoice;
let computerChoice;

function playRound() {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
}

playRound(); // call the func first to generate values
console.log(`Human chose ${humanChoice}, Computer chose ${computerChoice}`) //retrieve it in template literals
