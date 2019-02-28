let currentRoll1, currentRoll2, dice, hold, currentScores, scores, Score1, Score2, currentRoll, initGame, activePlayer1;
Score1 = document.querySelector('.score-1');
Score2 = document.querySelector('.score-2');
currentRoll1 = document.querySelector('.current-roll-1');
currentRoll2 = document.querySelector('.current-roll-2');
dice = document.querySelector('.dice');
hold = document.querySelector('.hold');
roll = document.querySelector('.roll');
initGame = document.querySelector('.initGame');

//start the game
function init() {
    currentScores = [0, 0];
    scores = [0, 0];
    currentRoll = 0;
    activePlayer1 = true;
    document.querySelector('.player-1').classList.add('active');
    document.querySelector('.player-2').classList.remove('active');
    currentRoll1.innerText = currentScores[0];
    currentRoll2.innerText = currentScores[1];
    Score1.innerText = scores[0];
    Score2.innerText = scores[1];
    dice.innerText = currentRoll;
    roll.classList.remove('hide');
    hold.classList.remove('hide');
    document.querySelector('.player-1-label').innerText = 'Player 1';
    document.querySelector('.player-2-label').innerText = 'Player 2';
    dice.src = 'pig.png';
}

init();

initGame.addEventListener('click', function() {
    init()
});

// add points to the active player
function rollDice() {
        currentRoll=(Math.floor(Math.random()*6 + 1));
        //display results
        dice.style.display = 'block';
        dice.src = 'dice-' + currentRoll + '.png';
        (activePlayer1?
            currentScores[0] += currentRoll:
            currentScores[1] += currentRoll
            );
//if dice=1 remove points
        if(currentRoll===1) {
            currentScores[0] = 0;
            currentScores[1] = 0;
            changePlayer();
        }
        currentRoll1.innerText = currentScores[0];
        currentRoll2.innerText = currentScores[1];
}

roll.addEventListener('click', function(){rollDice()});

//changing player

function changePlayer() {
    //changing from player 1 to player 2
    if(activePlayer1) {
        activePlayer1 = false;
        document.querySelector('.player-2').classList.toggle('active');
        document.querySelector('.player-1').classList.toggle('active');
        dice.innerText = 0;
        scores[0] +=currentScores[0];
        Score1.innerText = scores[0]
        currentScores = [0, 0];
        currentRoll1.innerText = 0;
        //estimating winner
        if(scores[0] >= 100) {
            document.querySelector('.player-1-label').innerText = 'WINNER'
            roll.classList.add('hide');
            hold.classList.add('hide');
            roll.classList.remove('roll');
            hold.classList.remove('hold');
            document.querySelector('.player-1').classList.add('active');
            document.querySelector('.player-2').classList.remove('active');
        }
    //changing from player 2 to player 1
    } else {
        activePlayer1 = true;
        document.querySelector('.player-1').classList.toggle('active');
        document.querySelector('.player-2').classList.toggle('active');
        dice.innerText = 0;
        scores[1] +=currentScores[1];
        Score2.innerText = scores[1];
        currentScores = [0, 0];
        currentRoll2.innerText = 0;
        //estimating winner
        if (scores[1] >= 100) {
        document.querySelector('.player-2-label').innerText = 'WINNER'
        roll.classList.add('hide');
        hold.classList.add('hide');
        roll.classList.remove('roll');
        hold.classList.remove('hold');
        document.querySelector('.player-2').classList.add('active');
        document.querySelector('.player-1').classList.remove('active');
                }
             }
    }    


hold.addEventListener('click', function( )
{changePlayer()
});