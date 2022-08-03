//defining variables
let computer;
let player;
let cptally = 0;
let ptally = 0;
let winMsg = 'You survived this time...';
let lossMsg = 'You lose...';

//Randomly gets rock paper or scisor for computer
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

//Gets player choice by alert and makes sure its rock paper or scissor
function playerPlay(){
    let player = '';
    while(!player){
        player = prompt("Choose only rock, paper, or scissor!");
        player = player.toLowerCase();
        (player == 'rock' || player == 'paper' || player == 'scissor')? null: player = '';
    }
    return player;
}

/*plays round of rock paper scissor based on 2 inputs and returns result as a string*/
function playRound(player, computer) {
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
                    cptally++;
                    return lose;
                    break;
                case 'scissor':
                    ptally++;
                    return win;
                    break;
            }
            break;
        case 'paper':
            switch (computer){
                case 'rock':
                    ptally++;
                    return win;
                    break;
                case 'paper':
                    return tie;
                    break;
                case 'scissor':
                    cptally++;
                    return lose;
                    break;
            }
            break;
        case 'scissor':
            switch (computer){
                case 'rock':
                    cptally++;
                    return lose;
                    break;
                case 'paper':
                    ptally++;
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


//Outputs result of a round
function outputResult(player){
    //checks if either cpu or player won
    fade();
    if(cptally == 5 || ptally == 5){
        end();
        return;
    }

    //displays round results
    result.textContent = playRound(player, computerPlay());
    pscore.textContent = ptally;
    cpscore.textContent = cptally;

    //checks if final msg should be displayed
    result.textContent = (cptally == 5)? lossMsg: (ptally == 5)? winMsg: result.textContent;
}

function end(){
    
}

//Gets button elements by ID
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissor = document.getElementById('s');

//Enables button eventlisteners
function enableButtons(){
    rock.addEventListener('click', ()=> {
        outputResult('rock');
    });
    paper.addEventListener('click', () => {
        outputResult('paper');
    });
    scissor.addEventListener('click', () => {
        outputResult('scissor');
    });
}

//Disables button eventlisteners
function disableButtons(){
    rock.removeEventListener('click', ()=> {
        outputResult('rock');
    });
    paper.removeEventListener('click', () => {
        outputResult('paper');
    });
    scissor.removeEventListener('click', () => {
        outputResult('scissor');
    });
}

enableButtons();

//gets, creates, and edits element for html
const body = document.querySelector('#body');
const result = document.createElement('div');
result.classList.add('result');
body.appendChild(result);
const pscore = document.createElement('div');
const cpscore = document.createElement('div');
pscore.textContent = ptally;
cpscore.textContent = cptally;
const pname = document.getElementsByClassName('names')[0];
const cpname = document.getElementsByClassName('names')[1];
pname.appendChild(pscore);
cpname.appendChild(cpscore);

//if given image number in query, it is faded
function fade(num) {
    var i = 0;
    var element = document.getElementsByTagName("img")[num];
    var k = window.setInterval(function() {
      if (i > 10) {
        clearInterval(k);
      } else {
        element.style.opacity = (10 - i) / 10;
        i++;
      }
    }, 25);
  };

  fade(0)
