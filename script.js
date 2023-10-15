// Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choiceSelector = Math.floor(Math.random()*choices.length);
    return choices[choiceSelector];
}

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    console.log("------------");
    console.log("Computer selects:", computerSelection);
    let playerWins = false;
    let computerWins = false;
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "Draw! You both chose " + playerSelection;
    } else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "scissors") {
                    playerWins = true;
                } else {
                    computerWins = true;
                }
                break
            case "paper":
                if (computerSelection === "rock") {
                    playerWins = true;
                } else {
                    computerWins = true;
                }
                break
            case "scissors":
                if (computerSelection === "paper") {
                    playerWins = true;
                } else {
                    computerWins = true;
                }
                break
            default:
                console.log("Oops! Invalid choice");
                break
        }
        if (playerWins === true) {
            playerScore++;
            return "You win! " + playerSelection + " beats " + computerSelection;
        } else if (computerWins === true) {
            computerScore++;
            return "You lose! " + computerSelection + " beats " + playerSelection;
        } else {
            return "No one wins!";
        }
    }
   
}

function game() {
    playerScore = 0;
    computerScore = 0;

    playerInput = prompt("Select either rock, paper, or scissors");
    roundResult = playRound(playerInput, getComputerChoice());
    console.log(roundResult);
    console.log("Your score is: ", playerScore);
    console.log("The computer's score is: ", computerScore);

    playerInput = prompt("Select either rock, paper, or scissors");
    roundResult = playRound(playerInput, getComputerChoice());
    console.log(roundResult);
    console.log("Your score is: ", playerScore);
    console.log("The computer's score is: ", computerScore);

    playerInput = prompt("Select either rock, paper, or scissors");
    roundResult = playRound(playerInput, getComputerChoice());
    console.log(roundResult);
    console.log("Your score is: ", playerScore);
    console.log("The computer's score is: ", computerScore);

    playerInput = prompt("Select either rock, paper, or scissors");
    roundResult = playRound(playerInput, getComputerChoice());
    console.log(roundResult);
    console.log("Your score is: ", playerScore);
    console.log("The computer's score is: ", computerScore);

    playerInput = prompt("Select either rock, paper, or scissors");
    roundResult = playRound(playerInput, getComputerChoice());
    console.log(roundResult);
    console.log("Your score is: ", playerScore);
    console.log("The computer's score is: ", computerScore);

    console.log("----- FINAL SCORE -------");
    console.log("Player:",playerScore,"Computer:",computerScore);
}