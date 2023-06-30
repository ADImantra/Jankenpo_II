//Player can start a game, end the game whenever, and choose one of three options (rock/paper/scissors) 
//computer randomly selects and then compares results. game ends at 5 turns and displays result

// Declare global variables
let playerScore = 0;
let compScore = 0;
let totalGames = 0;

const startButton = document.getElementById("startButton").addEventListener(`click`, startGame);
const replayButton = document.getElementById("playAgain").addEventListener(`click`, reset);

const replayButton = document.getElementById("playAgain").addEventListener(`click`, reset);

const buttonBox = document.getElementById("setupBox");
const reveal = document.getElementById("revealer");
const endBox = document.getElementById("endGame");

function startGame()
{
    buttonBox.style.display = "none";
    reveal.style.display = "flex";
};

function compTurn() 
{
    let min = Math.floor(1);
    let max = Math.floor(3);
    let compValue = Math.floor(Math.random() * (max - min + 1) + min);

    if (compValue === 1) {
        return "rock";
    }
    else if (compValue === 2) {
        return "paper";
    }
    else {
        return "scissors";
    } 
};

function janKenPo(playerChoice=``) 
{   // grabs the computer's "play"
    let compChoice = compTurn();

    console.log(`You Chose ${playerChoice}`);
    console.log(`They Chose ${compChoice}`);

    if (playerChoice === `rock`) {
        if (compChoice === `scissors`) {

            playerScore++
            totalGames++

            const currentPlayerScore = document.querySelector("#pScore").innerHTML = `Player Score: ${playerScore}`;
            const currentTotalGame = document.querySelector("#gScore").innerHTML = `Total Games: ${totalGames}`;
            const gameMessage = document.querySelector("#turnResult").innerHTML = `${playerChoice} beats ${compChoice} you win this round`;

            console.log(`Win`)
            checkWinner()

        } else if (compChoice === `paper`) {

            compScore++
            totalGames++

            const currentCompScore = document.querySelector("#cScore").innerHTML = `Comp Score: ${compScore}`;
            const currentTotalGame = document.querySelector("#gScore").innerHTML = `Total Games: ${totalGames}`;
            const gameMessage = document.querySelector("#turnResult").innerHTML = `${compChoice} beats ${playerChoice} you lose this round`;

            console.log(`Lose`)
            checkWinner()

        } else {

            totalGames++

            const currentTotalGame = document.querySelector("#gScore").innerHTML = `Total Games: ${totalGames}`;
            const gameMessage = document.querySelector("#turnResult").innerHTML = `${compChoice} against ${playerChoice} it's a draw`;

            console.log(`Tie`)
            checkWinner()
        }
    } else if (playerChoice === `paper`) {
        if (compChoice === `rock`) {

            playerScore++
            totalGames++

            const currentPlayerScore = document.querySelector("#pScore").innerHTML = `Player Score: ${playerScore}`;
            const currentTotalGame = document.querySelector("#gScore").innerHTML = `Total Games: ${totalGames}`;
            const gameMessage = document.querySelector("#turnResult").innerHTML = `${playerChoice} beats ${compChoice} you win this round`;

            console.log(`Win`)
            checkWinner()

        } else if (compChoice === `scissors`) {

            compScore++
            totalGames++

            const currentCompScore = document.querySelector("#cScore").innerHTML = `Comp Score: ${compScore}`;
            const currentTotalGame = document.querySelector("#gScore").innerHTML = `Total Games: ${totalGames}`;
            const gameMessage = document.querySelector("#turnResult").innerHTML = `${compChoice} beats ${playerChoice} you lose this round`;

            console.log(`Lose`)
            checkWinner()

        } else {

            totalGames++

            const currentTotalGame = document.querySelector("#gScore").innerHTML = `Total Games: ${totalGames}`;
            const gameMessage = document.querySelector("#turnResult").innerHTML = `${compChoice} against ${playerChoice} it's a draw`;

            console.log(`Tie`)
            checkWinner()
        } 
    } else {
        if (compChoice === `paper`) {

            playerScore++
            totalGames++

            const currentPlayerScore = document.querySelector("#pScore").innerHTML = `Player Score: ${playerScore}`;
            const currentTotalGame = document.querySelector("#gScore").innerHTML = `Total Games: ${totalGames}`;
            const gameMessage = document.querySelector("#turnResult").innerHTML = `${playerChoice} beats ${compChoice} you win this round`;

            console.log(`Win`)
            checkWinner()

        } else if (compChoice === `rock`) {

            compScore++
            totalGames++

            const currentCompScore = document.querySelector("#cScore").innerHTML = `Comp Score: ${compScore}`;
            const currentTotalGame = document.querySelector("#gScore").innerHTML = `Total Games: ${totalGames}`;
            const gameMessage = document.querySelector("#turnResult").innerHTML = `${compChoice} beats ${playerChoice} you lose this round`;

            console.log(`Lose`)
            checkWinner()

        } else {

            totalGames++

            const currentTotalGame = document.querySelector("#gScore").innerHTML = `Total Games: ${totalGames}`;
            const gameMessage = document.querySelector("#turnResult").innerHTML = `${compChoice} against ${playerChoice} it's a draw`;

            console.log(`Tie`)
            checkWinner()
        }
    }
};

function checkWinner() 
{
    if (playerScore === 5 || compScore === 5) {
        if (playerScore > compScore) {
            playerWins()
        }
        else if(compScore > playerScore) {
            compWins()
        }
        else {
            tieGame()
        }
    } 
};

function playerWins() 
{
    console.log(`You Win`)
    const gameMessage = document.querySelector("#turnResult").innerHTML = `You have won this game, play again?`;

    buttonBox.style.display = "none";
    reveal.style.display = "none";
    endBox.style.display = "flex";
};

function compWins() 
{
    console.log(`You Lose`)
    const gameMessage = document.querySelector("#turnResult").innerHTML = `You have lost this game, play again?`;

    buttonBox.style.display = "none";
    reveal.style.display = "none";
    endBox.style.display = "flex";
};

function tieGame() 
{
    console.log(`It's a Tie`)
    const gameMessage = document.querySelector("#turnResult").innerHTML = `against all odds, it's a draw... play again?`;

    buttonBox.style.display = "none";
    reveal.style.display = "none";
    endBox.style.display = "flex";
};

function reset() 
{
    playerScore = 0;
    const currentPlayerScore = document.querySelector("#pScore").innerHTML = `Player Score: ${playerScore}`;

    compScore = 0;
    const currentCompScore = document.querySelector("#cScore").innerHTML = `Comp Score: ${compScore}`;

    totalGames = 0;
    const currentTotalGame = document.querySelector("#gScore").innerHTML = `Total Games: ${totalGames}`;

    buttonBox.style.display = "none";
    reveal.style.display = "flex";
    endBox.style.display = "none";

};