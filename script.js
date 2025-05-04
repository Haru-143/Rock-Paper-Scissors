// variable to store the scores
let humanScore = 0;
let computerScore = 0;

// Computer will randomly return Rock, Paper, Scissors
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    switch(random) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
}

// User inputs Rock, Paper, or Scissors
function getHumanChoice() {
    return prompt("Enter Rock, Paper, or Scissor").toLowerCase();
}
