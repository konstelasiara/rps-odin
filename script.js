function getComputerChoice() {
  let numOfChoices = 3;
  return Math.floor((Math.random() * numOfChoices) + 1);
}

function getHumanChoice() {
  let humanChoice =  prompt("You may enter your choice");
  return humanChoice.charAt(0).toUpperCase() +
  humanChoice.slice(1).toLowerCase();
}