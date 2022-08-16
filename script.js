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

/*plays round of rock paper scissor based on 2 inputs and returns result as a string*/
function playRound(player, computer) {
    let tie = `It's a tie, you both choose ${player}`;
    let win = `You win! ${player} beats ${computer}`;
    let lose = `You lose! ${computer} beats ${player}`;

    switch (player){
        case 'rock':
            switch (computer){
                case 'rock':
                    fadeOthers(0, 3);
                    return tie;
                    break;
                case 'paper':
                    cptally++;
                    fadeOthers(0, 4);
                    return lose;
                    break;
                case 'scissor':
                    ptally++;
                    fadeOthers(0, 5);
                    return win;
                    break;
            }
            break;
        case 'paper':
            switch (computer){
                case 'rock':
                    fadeOthers(1, 3);
                    ptally++;
                    return win;
                    break;
                case 'paper':
                    fadeOthers(1, 4);
                    return tie;
                    break;
                case 'scissor':
                    fadeOthers(1, 5);
                    cptally++;
                    return lose;
                    break;
            }
            break;
        case 'scissor':
            switch (computer){
                case 'rock':
                    fadeOthers(2, 3);
                    cptally++;
                    return lose;
                    break;
                case 'paper':
                    fadeOthers(2, 4);
                    ptally++;
                    return win;
                    break;
                case 'scissor':
                    fadeOthers(2, 5);
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
    
    if(cptally == 5 || ptally == 5){
        return;
    }

    //displays round results
    result.textContent = playRound(player, computerPlay());
    pscore.textContent = ptally;
    cpscore.textContent = cptally;

    //checks if final msg should be displayed
    result.textContent = (cptally == 5)? lossMsg: (ptally == 5)? winMsg: result.textContent;
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


enableButtons();

//gets, creates, and edits element for html
const replay = document.querySelector(".replay");
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

//if given image number in query, true is fade, false is unfade
function fade(bool, num) {
    var i = 0;
    var element = document.getElementsByTagName("img")[num];
    var k = window.setInterval(function() {
      if (i > 10) {
        clearInterval(k);
      } else {
        element.style.opacity = (bool)? (10 - i) / 10: (i) / 10;
        i++;
      }
    }, 25);
};

//fades out the nonfades images not queried 
function fadeOthers(x, y){
    for (let i = 0; i < 6; i++){
        if (i == x || i == y){
            continue;
        } else {
            fade(true, i);
        }

        fadeElement(false, result);
        setTimeout(() => {
            if(cptally != 5 && ptally != 5){
                fadeElement(true, result);
                fade(false, i);
            } else {
                fade(true, x);
                fade(true, y);
                fadeElement(false, replay);
            }
        }, 1500);
    }
};

//true fades object, false unfades it
function fadeElement(bool, element) {
    var i = 0;
    var k = window.setInterval(function() {
      if (i > 10) {
        clearInterval(k);
      } else {
        element.style.opacity = (bool)? (10 - i) / 10: i / 10;
        i++;
      }
    }, 25);
};
