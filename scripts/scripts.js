//Player can start a game, end the game whenever, and choose one of three options (rock/paper/scissors) 
//computer randomly selects and then compares results. game ends at 5 turns and displays result

// Declare global variables
let playerScore = 0;
let compScore = 0;
let totalGames = 0;

// creates a random number 1 to 3 and associates it with "rock", 
// "paper", or "scissors"
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
}

// this is actual "game" it takes an input from the player
// and grabs the computer's choice, then compares them.
function janKenPo(playerChoice=``) 
{   // grabs the computer's "play"
    let compValue = compTurn();

    console.log(`You Chose ${playerChoice}`);
    console.log(`They Chose ${compValue}`);

    if (playerChoice === `rock`) {
        if (compValue === `scissors`) {
            playerScore++
            totalGames++
            const currentPlayerScore = document.querySelector("#pScore").innerHTML = `Player Score: ${playerScore}`;
            const currentTotalGame = document.querySelector("#gScore").innerHTML = `Total Games: ${totalGames}`;
            console.log(`Win`)
            checkWinner()
        } else if (compValue === `paper`) {
            compScore++
            totalGames++
            const currentCompScore = document.querySelector("#cScore").innerHTML = `Comp Score: ${compScore}`;
            const currentTotalGame = document.querySelector("#gScore").innerHTML = `Total Games: ${totalGames}`;
            console.log(`Lose`)
            checkWinner()
        } else {
            totalGames++
            const currentTotalGame = document.querySelector("#gScore").innerHTML = `Total Games: ${totalGames}`;
            console.log(`Tie`)
            checkWinner()
        }
    } else if (playerChoice === `paper`) {
        if (compValue === `rock`) {
            playerScore++
            totalGames++
            const currentPlayerScore = document.querySelector("#pScore").innerHTML = `Player Score: ${playerScore}`;
            const currentTotalGame = document.querySelector("#gScore").innerHTML = `Total Games: ${totalGames}`;
            console.log(`Win`)
            checkWinner()
        } else if (compValue === `scissors`) {
            compScore++
            totalGames++
            const currentCompScore = document.querySelector("#cScore").innerHTML = `Comp Score: ${compScore}`;
            const currentTotalGame = document.querySelector("#gScore").innerHTML = `Total Games: ${totalGames}`;
            console.log(`Lose`)
            checkWinner()
        } else {
            totalGames++
            const currentTotalGame = document.querySelector("#gScore").innerHTML = `Total Games: ${totalGames}`;
            console.log(`Tie`)
            checkWinner()
        } 
    } else {
        if (compValue === `paper`) {
            playerScore++
            totalGames++
            const currentPlayerScore = document.querySelector("#pScore").innerHTML = `Player Score: ${playerScore}`;
            const currentTotalGame = document.querySelector("#gScore").innerHTML = `Total Games: ${totalGames}`;
            console.log(`Win`)
            checkWinner()
        } else if (compValue === `rock`) {
            compScore++
            totalGames++
            const currentCompScore = document.querySelector("#cScore").innerHTML = `Comp Score: ${compScore}`;
            const currentTotalGame = document.querySelector("#gScore").innerHTML = `Total Games: ${totalGames}`;
            console.log(`Lose`)
            checkWinner()
        } else {
            totalGames++
            const currentTotalGame = document.querySelector("#gScore").innerHTML = `Total Games: ${totalGames}`;
            console.log(`Tie`)
            checkWinner()
        }
    }
}

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
            tieGame
        }
    } 
}

function playerWins() 
{
    console.log(`You Win`)
}

function compWins() 
{
    console.log(`You Lose`)
}

function tieGame() 
{
    console.log(`It's a Tie`)
}