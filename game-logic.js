const round = document.getElementById('round');
const message = document.getElementById('msg');

const playerScore = document.getElementById('player');
const computerScore = document.getElementById('computer');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener("click", playerClick);
paper.addEventListener("click", playerClick);
scissors.addEventListener("click", playerClick);

function playerClick(e) {
    var option = e.target || e.srcElement;
    playerSelection = option.id;
    computerSelection = computerPlay();

    return game();
}

let i = 0;
let rounds = 0;
let playerSelection = "";
playerScore.innerHTML = 0;
computerScore.innerHTML = 0;

function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}
let computerSelection = computerPlay();


function game() {
    ++i;
    ++rounds;
    round.innerHTML = `Round ${ i }`;

    switch (rounds) {
        case 1:
        case 2:
        case 3:
        case 4:
            playRound();
            break;
        case 5:
            if (playerScore.innerHTML > computerScore.innerHTML) {
                message.innerHTML = `You WIN, with ${ playerScore.innerHTML } over ${ computerScore.innerHTML }! Congrats!!`;
            }
            else if (playerScore.innerHTML < computerScore.innerHTML) {
                message.innerHTML = `Oh, bummer, you lose ${ computerScore.innerHTML } to ${ playerScore.innerHTML }. Play again!`;
            }
            else if (playerScore.innerHTML === computerScore.innerHTML) {
                message.innerHTML = "Wow, it's a tie! GAME OVER.";
            }
            i = 0;
            rounds = 0;
            playerSelection = "";
            playerScore.innerHTML = 0;
            computerScore.innerHTML = 0;
            break;
    }
}

function playRound() {
    const winnerCase1 = (playerSelection === "rock" && computerSelection === "scissors");
    const winnerCase2 = (playerSelection === "paper" && computerSelection === "rock");
    const winnerCase3 = (playerSelection === "scissors" && computerSelection === "paper");
    const winnerCases = (winnerCase1 || winnerCase2 || winnerCase3);

    if (playerSelection === computerSelection) {
        message.innerHTML = "It's a tie!";
    }
    else if (playerSelection !== computerSelection) {
        if (winnerCases) {
            playerScore.innerHTML = parseInt(playerScore.innerHTML, 10) + 1;
            message.innerHTML = `You win, ${ playerSelection } beats ${ computerSelection }!`;
        }
        else if (!winnerCases) {
            computerScore.innerHTML = parseInt(computerScore.innerHTML, 10) + 1;
            message.innerHTML = `You lose, ${ computerSelection } beats ${ playerSelection }!`;
        }
    }
    else {
        message.innerHTML = "Work in progress!";
    }
    return [playerScore, computerScore];
}

