let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  // computers random moves
  const arrayOfChoice = ["rock", "paper", "scrissor"];
  const randomChoice = Math.floor(Math.random() * 3);
  const computerChoice = arrayOfChoice[randomChoice];

  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  //tie rules
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's a tie";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a tie";
  } else if (
    playerSelection === "scrissor" &&
    computerSelection === "scrissor"
  ) {
    return "It's a tie";
    //game rules
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Paper beats rock";
    computerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Paper beats rock";
    playerScore++;
  } else if (playerSelection === "rock" && computerSelection === "scrissor") {
    return "Rock beats scrissor";
    playerScore++;
  } else if (playerSelection === "scrissor" && computerSelection === "rock") {
    return "Rock beats scrissor";
    computerScore++;
  } else if (playerSelection === "paper" && computerSelection === "scrissor") {
    return "Scrissor beats paper";
    computerScore++;
  } else if (playerSelection === "scrissor" && computerSelection === "paper") {
    return "Scrissor beats paper";
    playerScore++;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Choose what to throw",
      "rock, paper, scrissor"
    );
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }

  if (playerScore > computerScore) {
    return "You beat the computer! Hooorey";
  } else if (playerScore < computerScore) {
    return "Computere win! Get better human ;p";
  } else {
    return "It's a tie";
  }
}
console.log(game());
