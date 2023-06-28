//Player can start a game, end the game whenever, and choose one of three options (rock/paper/scissors) 
//computer randomly selects and then compares results. game ends at 5 turns and displays result

let player_wins = 0;
let comp_wins = 0;
let total_games = 0;

let game_on = false;

function is_game_on() {
    game_on = true;
    console.log(game_on)
    
}
 
function get_rand_int() {
    let min = Math.floor(1);
    let max = Math.floor(3);
    console
    return Math.floor(Math.random() * (max - min + 1) + min);

}

function the_game(player_choice=``) {
    console.log(player_choice);
    let ran_int = 0;    
    do {
        ran_int = get_rand_int()
        switch (ran_int) {
            case 1:
                console.log("comp choice is rock") 
                if (player_choice === `Paper`) {
                    player_wins += 1;
                    total_games += 1;
                    console.log(`win`);
                    break;
                } else if (player_choice === `Scissors`) {
                    comp_wins += 1;
                    total_games += 1;
                    console.log(`lose`);
                    break;
                } else {
                    console.log(`tie`);
                    break;
                }
            case 2:
                console.log("comp choice is paper")  
                if (player_choice === `Scissors`) {
                    player_wins += 1;
                    total_games += 1;
                    console.log(`win`);
                    break;
                } else if (player_choice === `Rock`) {
                    comp_wins += 1;
                    total_games += 1;
                    console.log(`lose`)
                    break;
                } else {
                    console.log(`tie`)
                    break;
                }
            case 3:
                console.log("comp choice is scissors")  
                if (player_choice === `Rock`) {
                    player_wins += 1;
                    total_games += 1;
                    console.log(`win`);
                    break;
                } else if (player_choice === `Paper`) {
                    comp_wins += 1;
                    total_games += 1;
                    console.log(`lose`)
                    break;
                } else {
                    console.log(`tie`)
                    break;
                }      
        } console.log("Choose again")

    } while (total_games < 5 && game_on === true);
}