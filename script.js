const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

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