/* This function gets a random number from
0 to 1, multiplies it by 3, and rounds it up.
It uses that randomly generated number to pick
rock paper or scissor and console log it*/

function computerPlay() {
    let output = Math.random() * 3;
    switch (Math.ceil(output)) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissor";
            break;
        default:
            console.log(output);
            return "didn't work";
    }
}

//Gets player choice and makes sure its rock paper or scissor
function playerPlay(){
    let player = '';
    while(!player){
        player = prompt("Choose only rock, paper, or scissor!");
        player = player.toLowerCase();
        (player == 'rock' || player == 'paper' || player == 'scissor')? null: player = '';
    }
    return player;
}

//defining computer and player choices
let computer;
let player;

/*defines game of rock paper scissor based on player 
and computer inputs*/
function playRound(player, computer) {
    //defines tie win and lose message
    let tie = `It's a tie, you both choose ${player}`;
    let win = `You win! ${player} beats ${computer}`;
    let lose = `You lose! ${computer} beats ${player}`;

    switch (player){
        case 'rock':
            switch (computer){
                case 'rock':
                    return tie;
                    break;
                case 'paper':
                    return lose;
                    break;
                case 'scissor':
                    return win;
                    break;
            }
            break;
        case 'paper':
            switch (computer){
                case 'rock':
                    return win;
                    break;
                case 'paper':
                    return tie;
                    break;
                case 'scissor':
                    return lose;
                    break;
            }
            break;
        case 'scissor':
            switch (computer){
                case 'rock':
                    return lose;
                    break;
                case 'paper':
                    return win;
                    break;
                case 'scissor':
                    return tie;
                    break;
            }
            break;
        default:
            console.log('did not work');
    }

} 

//plays game for 5 rounds
function game(){
    for (let i = 0; i < 5; i++){
        console.log(`Round ${i}!!!`);
        computer = computerPlay();
        player = playerPlay();
        console.log(playRound(player, computer));
    }
}

game();
