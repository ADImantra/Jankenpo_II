//Player can start a game, end the game whenever, and choose one of three options (rock/paper/scissors) 
//computer randomly selects and then compares results. game ends at 5 turns and displays result

// Declare global variables
let playerScore = 0;
let compScore = 0;
let totalGames = 0;

//create an object for all the elements in the html we're going to use.
const body = document.querySelector(`body`);
const setup = document.querySelector(`.setup`);
const startButton = document.querySelector(`.start-button`);
const main = document.querySelector(`.main`);
const container = document.querySelector(`.container`);
const endGame = document.querySelector(`.end-game`);
const endButton = document.querySelectorAll(`.end-game-button`);


//this is the trigger thats going to actually run the game. The player's primary 
//means of interacting and triggering events. 
const rock = document.getElementById("rock").addEventListener(`click`, () => {
    janKenPo(`rock`);
});

const paper = document.getElementById("paper").addEventListener(`click`, () => {
    janKenPo(`paper`);
});

const scissors = document.getElementById("scissors").addEventListener(`click`, () => {
    janKenPo(`scissors`);
});


//initializes the UI on load-in
document.addEventListener(`DOMContentLoaded`, initialize);
const gameStart = document.querySelector(`.start-button`).addEventListener(`click`, startGame);


function initialize() 
{
    //removes the player's buttons prior to "Start game"
    main.removeChild(container);

    //removes "end-game" buttons until a winner is declared
    let buttonArray = Array.from(endButton);
    buttonArray.forEach(button => button.remove());
}

//causes player-buttons to appear
function startGame() 
{
    setup.removeChild(startButton);
    main.appendChild(container)
}

//random number generator 1-3
function compTurn() 
{
    let min = Math.floor(1);
    let max = Math.floor(3);
    let compValue = Math.floor(Math.random() * (max - min + 1) + min);

    if (compValue === 1) {
        return "rock";
    } else if (compValue === 2) {
        return "paper";
    } else {
        return "scissors";
    };
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


            console.log(`Win`)
            checkWinner()

        } else if (compChoice === `paper`) {

            compScore++
            totalGames++


            console.log(`Lose`)
            checkWinner()

        } else {

            totalGames++

            console.log(`Tie`)
            checkWinner()
        }
    } else if (playerChoice === `paper`) {
        if (compChoice === `rock`) {

            playerScore++
            totalGames++

            console.log(`Win`)
            checkWinner()

        } else if (compChoice === `scissors`) {

            compScore++
            totalGames++

            console.log(`Lose`)
            checkWinner()

        } else {

            totalGames++

            console.log(`Tie`)
            checkWinner()
        } 
    } else {
        if (compChoice === `paper`) {

            playerScore++
            totalGames++

            console.log(`Win`)
            checkWinner()

        } else if (compChoice === `rock`) {

            compScore++
            totalGames++

            console.log(`Lose`)
            checkWinner()

        } else {

            totalGames++

            console.log(`Tie`)
            checkWinner()
        }
    }
};

function checkWinner() 
{
    if (playerScore === 5 || compScore === 5) {
        if (playerScore > compScore) {
            console.log(`player wins`)
        }
        else if(compScore > playerScore) {
            console.log(`comp wins`)
        }
        else {
            console.log(`tie`)
        }
    } 
};

