// console.log("Hello World")

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

function getHumanChoice() {
  let humanChoice = prompt(
    "Enter your choice:rock,paper or scissors?"
  ).toLowerCase();
  while (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    humanChoice = prompt(
      "Enter your choice:rock,paper or scissors?"
    ).toLowerCase();
  }
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`A draw,both of you are ${humanChoice}`);
    return 0;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win,${humanChoice} beat ${computerChoice}`);
    return 1;
  } else {
    console.log(`You lose,${computerChoice} beat ${humanChoice}`);
    return -1;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 5;
  while (round > 0) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let res = playRound(humanChoice, computerChoice);
    if(res>0){
      humanScore++;
    }else if(res<0){
      computerScore++;
    }
    round--;
  }
  if(humanScore===computerScore){
    console.log(`Finally,a Draw,Your score is ${humanScore},and Computer's score is ${computerScore}`)
  }else if(humanScore> computerScore){
    console.log(`You Win!!!,Your score is ${humanScore},and Computer's score is ${computerScore}`)
  }else{
    console.log(`You Lose!!!,Your score is ${humanScore},and Computer's score is ${computerScore}`);
  }
}

playGame()