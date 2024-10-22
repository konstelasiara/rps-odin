function getHumanChoice() {
  let acceptedChoices = ["Rock", "Paper", "Scissors"];
  let humanPrompt;
  let humanOpt;

  // prompt & checking if the input is valid
  do {
    humanPrompt = prompt("You may enter your choice: Rock, Paper, or Scissors").toLowerCase();
    humanOpt = humanPrompt.charAt(0).toUpperCase() + humanPrompt.slice(1).toLowerCase();
  } while (!acceptedChoices.includes(humanOpt))
  
  return humanOpt;
}

function getComputerChoice() {
  let numOfChoices = 3;
  let numRes = Math.floor(Math.random() * numOfChoices);
  let optComputer = ["Rock", "Paper", "Scissors"];
  return optComputer[numRes];
}

// to contain values from functs above
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

function playRound() {
  // trigger the choices functions
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  // shows up options for each choice functions
  console.log(humanChoice);
  console.log(computerChoice);

  //retrieve it in template literals
  console.log(`You chose ${humanChoice}, Computer chose ${computerChoice}`);

  // compare each choices
  if (humanChoice === "Rock" && computerChoice === "Scissors" ||
    humanChoice === "Paper" && computerChoice === "Rock" ||
    humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++;
        console.log("Congrats! You win!");
    } else if (humanChoice === "Scissors" && computerChoice === "Rock" ||
      humanChoice === "Rock" && computerChoice === "Paper" ||
      humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore++;
        console.log("Uh oh! You lose!");
      } else {
        drawScore++;
        console.log("It's a draw!");
      }
}

function playGame() {
  // triggers a 5 rounds game by looping playRound() function
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  

  // scoring
  console.log(`Your score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
  console.log(`Draw tally: ${drawScore}`);
}

// declare game result
function gameResult() {
  if (humanScore > computerScore) {
    console.log("Congrats, you win the game!");
  } else if (computerScore > humanScore) {
    console.log("You lose... too bad...");
  } else {
    console.log("No one wins~");
  }
}


playGame();
gameResult();