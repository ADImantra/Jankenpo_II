//Player can start a game, end the game whenever, and choose one of three options (rock/paper/scissors) 
//computer randomly selects and then compares results. game ends at 5 turns and displays result

// Declare global variables
let playerScore = 0;
let compScore = 0;
let totalGames = 0;

//create an object for all the elements in the html we're going to use.
const body = document.querySelector(`body`);
const gameBox = document.querySelector(`.game-box`);

const gameText = document.getElementById(`game-text`);
const totalGamesDisplay = document.getElementById(`total-games`);
const playerScoreDisplay = document.getElementById(`player-score`);
const compScoreDisplay = document.getElementById(`comp-score`);

const setup = document.querySelector(`.setup`);
const startButton = document.querySelector(`.start-button`);
const main = document.querySelector(`.main`);
const container = document.querySelector(`.container`);
const endGame = document.querySelector(`.end-game`);
const endButton = document.querySelectorAll(`.end-game-button`);

const ender = document.getElementById(`ender`).addEventListener(`click`, () => {
    restart(`end`)
})

const looper = document.getElementById(`looper`).addEventListener(`click`, () => {
    restart(`loop`)
})


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
    main.remove();

    //removes "end-game" buttons until a winner is declared
    endGame.remove();
}

//causes player-buttons to appear
function startGame() 
{
    setup.remove();
    gameBox.appendChild(main);
    gameText.textContent = `選べ`;
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

function idiom(str) {
    
    let idiomChoice = compTurn()
    console.log(`idiom got called and idiom choice = ${idiomChoice}`)

    if (str === `win`) {
        switch(idiomChoice) {
            case `rock`:
                gameText.textContent = `弱肉強食 `;
                break;
            case `paper`:
                gameText.textContent = `花は桜木人は武士 `;
                break;
            case `scissors`:
                gameText.textContent = `口は災いの元`;
                break;
        }
        checkWinner()

    } else if (str === `lose`) {
        switch(idiomChoice) {
            case `rock`:
                gameText.textContent = `七転び八起き `;
                break;
            case `paper`:
                gameText.textContent = `猿も木から落ちる `;
                break;
            case `scissors`:
                gameText.textContent = `因果応報 `;
                break;
        }
        checkWinner()

    } else {
        switch(idiomChoice) {
            case `rock`:
                gameText.textContent = `二兎を追う者は一兎をも得ず`;
                break;
            case `paper`:
                gameText.textContent = `虎穴に入らずんば虎子を得ず`;
                break;
            case `scissors`:
                gameText.textContent = `能ある鷹は爪を隠す`;
                break;
        }
        checkWinner()

    };
};

//actual game
function janKenPo(playerChoice=``) 
{   // grabs the computer's "play"
    let compChoice = compTurn();

    console.log(`You Chose ${playerChoice}`);
    console.log(`They Chose ${compChoice}`);

    if (playerChoice === `rock`) {
        if (compChoice === `scissors`) {

            playerScore++;
            totalGames++;

            idiom(`win`); 

        } else if (compChoice === `paper`) {

            compScore++;
            totalGames++;

            idiom(`lose`); 

        } else {

            totalGames++;

            idiom(`tie`);
            
        }
    } else if (playerChoice === `paper`) {
        if (compChoice === `rock`) {

            playerScore++;
            totalGames++;

            idiom(`win`);

        } else if (compChoice === `scissors`) {

            compScore++;
            totalGames++;

            idiom(`lose`);
    
        } else {

            totalGames++;

            idiom(`tie`);
            
        } 
    } else {
        if (compChoice === `paper`) {

            playerScore++;
            totalGames++;

            idiom(`win`);
        
        } else if (compChoice === `rock`) {

            compScore++;
            totalGames++;

            idiom(`lose`);
            
        } else {

            totalGames++;

            idiom(`tie`);
            
        }
    }
};

//checks which player got to 5 wins first
function checkWinner() 
{
    totalGamesDisplay.textContent = ` 回 :  ${totalGames}`;
    playerScoreDisplay.textContent = ` プレイヤー : ${playerScore}`;
    compScoreDisplay.textContent = `  コンピュータ :  ${compScore}`;

    if (playerScore === 5 || compScore === 5) {
        if (playerScore > compScore) {
            console.log(`player wins`)
            playerWins();
        }
        else if(compScore > playerScore) {
            console.log(`comp wins`)
            compWins();
        }
        else {
            console.log(`tie`)
            tieGame();
        }
    } 
};

function playerWins() 
{
    main.remove()
    gameBox.appendChild(endGame)
}

function compWins() 
{
    main.remove()
    gameBox.appendChild(endGame)
}

function tieGame() 
{
    main.remove()
    gameBox.appendChild(endGame)
}

//rests UI to either 
function restart(str) {
    if (str === `end`) {
        playerScore = 0;
        compScore = 0;
        totalGames = 0;

        totalGamesDisplay.textContent = ` 回 :  ${totalGames}`;
        playerScoreDisplay.textContent = ` プレイヤー : ${playerScore}`;
        compScoreDisplay.textContent = `  コンピュータ :  ${compScore}`;
        gameText.textContent = `じゃん拳を遊びませんか 先着〜5勝`;

        endGame.remove();
        gameBox.appendChild(setup);
    } else {
        playerScore = 0;
        compScore = 0;
        totalGames = 0;

        totalGamesDisplay.textContent = ` 回 :  ${totalGames}`;
        playerScoreDisplay.textContent = ` プレイヤー : ${playerScore}`;
        compScoreDisplay.textContent = `  コンピュータ :  ${compScore}`;
        gameText.textContent = `選べ`;

        endGame.remove();
        gameBox.appendChild(main);
    };
}