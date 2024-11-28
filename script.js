const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const choices = document.querySelector("#choices");
const outcome =  document.querySelector("#outcome");
const score = document.querySelector("#score");
const announce = document.querySelector("#announce");

const reset = document.querySelector("#reset");


// human choices are called here
rock.addEventListener("click", () => playRound("Rock"));
paper.addEventListener("click", () => playRound("Paper"))
scissors.addEventListener("click", () => playRound("Scissors"));

// to contain scores
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

let gameOver = false;

function getComputerChoice() {
  let numOfChoices = 3;
  let numRes = Math.floor(Math.random() * numOfChoices);
  let optComputer = ["Rock", "Paper", "Scissors"];
  return optComputer[numRes];
}

function playRound(humanChoice) {
  if (gameOver) {
    return
  }

  // trigger the choices functions
  let computerChoice = getComputerChoice();

  //retrieve the result on page
  choices.textContent = `You chose ${humanChoice}, Computer chose ${computerChoice}`;

  let roundResult = "";
  // compare each choices
  if (humanChoice === "Rock" && computerChoice === "Scissors" ||
    humanChoice === "Paper" && computerChoice === "Rock" ||
    humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++;
        roundResult = "Congrats! You win!";
    } else if (humanChoice === "Scissors" && computerChoice === "Rock" ||
      humanChoice === "Rock" && computerChoice === "Paper" ||
      humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore++;
        roundResult = "Uh oh! You lose!";
      } else {
        drawScore++;
        roundResult = "It's a draw!";
      }

  outcome.textContent = roundResult;
  score.textContent = `You: ${humanScore} v. Computer: ${computerScore}`;

  if (humanScore == 5) {
    announce.textContent = "You win the game!";
    gameOver = true;
  } else if (computerScore == 5) {
    announce.textContent = "Computer wins the game!";
    gameOver = true;
  }

  if (gameOver) {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
}

reset.addEventListener("click", resetGame);

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  drawScore = 0;
  gameOver = false;
  choices.textContent = "";
  outcome.textContent = "";
  score.textContent = "You: 0 v. Computer: 0";
  announce.textContent = "";
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
}
