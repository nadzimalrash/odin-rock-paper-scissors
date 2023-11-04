const scoreTable = document.querySelector('table');
const btn = document.querySelectorAll('button');

let playerScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choiceSelector = Math.floor(Math.random()*choices.length);
    return choices[choiceSelector];
}

btn.forEach(function (e) {
    e.addEventListener('click', game);
})

function game() {
    const playerSelection = this.id;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

function playRound(player, computer) {
    if (player === computer) {
        console.log("tied");
    } else {
        switch (player) {
            case "rock":
                if (computer === "scissors") {
                    playerScore = playerScore + 1;
                } else {
                    computerScore = computerScore + 1;
                }
                break
            case "paper":
                if (computer === "rock") {
                    playerScore = playerScore + 1;
                } else {
                    computerScore = computerScore + 1;
                }
                break
            case "scissors":
                if (computer === "paper") {
                    playerScore = playerScore + 1;
                } else {
                    computerScore = computerScore + 1;
                }
                break
            default:
                break
        }
    }
    postScore(player, computer);
}

function postScore(player, computer) {
    round = round + 1;
    const scoreRow = document.createElement('tr');
        const scoreColRound = document.createElement('td');
            scoreColRound.textContent = round;
            scoreRow.appendChild(scoreColRound);
        const scoreColPlayer = document.createElement('td');
            scoreColPlayer.textContent = playerScore + ' (' + player + ')';
            scoreRow.appendChild(scoreColPlayer);
        const scoreColComputer = document.createElement('td');
            scoreColComputer.textContent = computerScore + ' (' + computer + ')';
            scoreRow.appendChild(scoreColComputer);
    scoreTable.appendChild(scoreRow);
    let winner = "";
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            winner = "Player";
        } else {
            winner = "Computer";
        }
        const announce = document.createElement('div');
        announce.style.display = "inline-block";
        announce.style.border = "1px solid black";
        announce.style.marginTop = "1em";
        announce.style.padding = "1em";
        announce.textContent = winner + " wins!";
        scoreTable.insertAdjacentElement('afterend', announce);

        btn.forEach(function (e) {
            e.removeEventListener('click', game);
            e.disabled = true;
        })
    }
}