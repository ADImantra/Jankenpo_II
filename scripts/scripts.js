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

function janKenPo(playerChoice=``) 
{   // grabs the computer's "play"
    let compValue = compTurn()

    console.log(`You chose ${playerChoice}`);
    console.log(`They Chose ${compValue}`);

    if (playerChoice === `rock`) {
        if (compValue === `scissors`) {
            playerScore++
            totalGames++
            console.log(`Win`)
        } else if (compValue === `paper`) {
            compScore++
            totalGames++
            console.log(`Lose`)
        } else {
            totalGames++
            console.log(`Tie`)
        }
    } else if (playerChoice === `paper`) {
        if (compValue === `rock`) {
            playerScore++
            totalGames++
            console.log(`Win`)
        } else if (compValue === `scissors`) {
            compScore++
            totalGames++
            console.log(`Lose`)
        } else {
            totalGames++
            console.log(`Tie`)
        } 
    } else {
        if (compValue === `paper`) {
            playerScore++
            totalGames++
            console.log(`Win`)
        } else if (compValue === `rock`) {
            compScore++
            totalGames++
            console.log(`Lose`)
        } else {
            totalGames++
            console.log(`Tie`)
        }
    }
}