const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const choices = document.querySelector("#choices");
const outcome =  document.querySelector("#outcome");
const score = document.querySelector("#score");

rock.addEventListener("click", () => playRound("Rock"));
paper.addEventListener("click", () => playRound("Paper"))
scissors.addEventListener("click", () => playRound("Scissors"));

// to contain scores
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

function getComputerChoice() {
  let numOfChoices = 3;
  let numRes = Math.floor(Math.random() * numOfChoices);
  let optComputer = ["Rock", "Paper", "Scissors"];
  return optComputer[numRes];
}

function playRound(humanChoice) {
  // trigger the choices functions
  let computerChoice = getComputerChoice();

  //retrieve the result on page
  choices.textContent = `You chose ${humanChoice}, Computer chose ${computerChoice}`;

  let result = "";
  // compare each choices
  if (humanChoice === "Rock" && computerChoice === "Scissors" ||
    humanChoice === "Paper" && computerChoice === "Rock" ||
    humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++;
        result = "Congrats! You win!";
    } else if (humanChoice === "Scissors" && computerChoice === "Rock" ||
      humanChoice === "Rock" && computerChoice === "Paper" ||
      humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore++;
        result = "Uh oh! You lose!";
      } else {
        drawScore++;
        result = "It's a draw!";
      }

  outcome.textContent = result;
  score.textContent = `You: ${humanScore} v. Computer: ${computerScore}`
}

  

//   // scoring
//   console.log(`Your score: ${humanScore}`);
//   console.log(`Computer score: ${computerScore}`);
//   console.log(`Draw tally: ${drawScore}`);
// }

// declare game result
// function gameResult() {
//   if (humanScore > computerScore) {
//     console.log("Congrats, you win the game!");
//   } else if (computerScore > humanScore) {
//     console.log("You lose... too bad...");
//   } else {
//     console.log("No one wins~");
//   }
// }


// playGame();
// gameResult();