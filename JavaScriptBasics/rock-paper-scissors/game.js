let humanScore = 0;
let computerScore = 0;
let currentRound = 0;

const finalScore = 5;
const finalResult = document.querySelector(".final-result");
const yourScorePara = document.querySelector(".your-score");
const computerScorePara = document.querySelector(".computer-score");
const gameInfo = document.querySelector(".game-info");

function getComputerChoice() {
  // Returns a random integer from 0 to 2:
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  const para = document.createElement("p");
  if (humanChoice === computerChoice) {
    para.textContent = `Round ${currentRound}: A draw,both of you are ${humanChoice}`;
    gameInfo.appendChild(para);
    return 0;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    para.textContent = `Round ${currentRound}: You win,${humanChoice} beat ${computerChoice}`;
    gameInfo.appendChild(para);
    return 1;
  } else {
    para.textContent = `Round ${currentRound}: You lose,${computerChoice} beat ${humanChoice}`;
    gameInfo.appendChild(para);
    return -1;
  }
}

function changeGameInfo(score) {
  if (score > 0) {
    humanScore++;
    if (humanScore === finalScore) {
      const para = document.createElement("p");
      para.textContent = "You Win";
      finalResult.appendChild(para);
    }
  } else if (score < 0) {
    computerScore++;
    if (computerScore === finalScore) {
      const para = document.createElement("p");
      para.textContent = "You Lose";
      finalResult.appendChild(para);
    }
  }

  yourScorePara.textContent = `Your Score: ${humanScore}`;
  computerScorePara.textContent = `Computer Score: ${computerScore}`;
}
function isGameOver() {
  return humanScore === finalScore || computerScore === finalScore;
}

// Here we add event listener to gameList instead of three buttons for saving memory
const gameList = document.querySelector(".game-list");

gameList.addEventListener("click", (event) => {
  const targetId = event.target.id;
  let humanChoice;
  switch (targetId) {
    case "rockBtn": {
      humanChoice = "rock";
      break;
    }
    case "paperBtn": {
      humanChoice = "paper";
      break;
    }
    case "scissorsBtn": {
      humanChoice = "scissors";
      break;
    }
  }

  if (isGameOver()) {
    const isRestart = confirm("The game is over.Restart?");
    if (isRestart) {
      //reload this page
      location.reload();
    }
  } else {
    currentRound++; 
    const score = playRound(humanChoice, getComputerChoice());
    changeGameInfo(score);
  }
});


