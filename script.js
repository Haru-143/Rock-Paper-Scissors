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

// Play Rock, Paper, Scissor for 5 rounds
function playGame() {
    // variable to store the scores
    let humanScore = 0;
    let computerScore = 0;

    // Function for playing a single round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === 'rock' && computerChoice === 'rock') {
            console.log("Computer chose rock.");
            console.log("It's a tie!");
            return;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log("Computer chose rock.");
            console.log("You win!");
            humanScore++;
            return;
        } else if (humanChoice === 'scissor' && computerChoice === 'rock') {
            console.log("Computer chose rock.");
            console.log("You lose!");
            computerScore++;
            return;
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            console.log("Computer chose paper.");
            console.log("You lose!");
            computerScore++;
            return;
        } else if (humanChoice === 'paper' && computerChoice === 'paper') {
            console.log("Computer chose paper.");
            console.log("It's a tie!");
            return;
        } else if (humanChoice === 'scissor' && computerChoice === 'paper') {
            console.log("Computer chose paper.");
            console.log("You win!");
            humanScore++;
            return;
        } else if (humanChoice === 'rock' && computerChoice === 'scissor') {
            console.log("Computer chose scissor.");
            console.log("You win!");
            humanScore++;
            return;
        } else if (humanChoice === 'paper' && computerChoice === 'scissor') {
            console.log("Computer chose scissor.");
            console.log("You lose!");
            computerScore++;
            return;
        } else if (humanChoice === 'scissor' && computerChoice === 'scissor') {
            console.log("Computer chose scissor.");
            console.log("It's a tie!");
            return;
        }
    }
    
    for (let round = 0; round <+ 5; round++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score: You ${humanScore} vs Computer ${computerScore}`);
    }
}

playGame();