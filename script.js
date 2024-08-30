function getHumanChoice() {
  let humanPrompt =  prompt("You may enter your choice");
  return humanPrompt.charAt(0).toUpperCase() +
  humanPrompt.slice(1).toLowerCase();
}

function getComputerChoice() {
  let numOfChoices = 3;
  return Math.floor((Math.random() * numOfChoices) + 1);
}

function playRound() {
  /* 
  possible to-dos:
  - how to store a value in a function and make it usable anywhere?
    - store it in a variable?
  
  */

  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
}

// I have a massive burnout aaaaaa plssss get back to this later