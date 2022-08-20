'use strict';

const diceImg = document.querySelector('.dice');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const reset = document.querySelector('.btn--new');
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
const playerOneTotal = document.querySelector('#score--0');
const playerTwoTotal = document.querySelector('#score--1');
const playerOneCurr = document.querySelector('#current--0');
const playerTwoCurr = document.querySelector('#current--1');
playerOneTotal.innerHTML = 0;
playerTwoTotal.innerHTML = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneTotScore = 0;
let playerTwoTotScore = 0;



const rollDice = () => {
    diceImg.classList.remove('hidden')
    const rollResult = Math.trunc(Math.random() * 6) + 1;
    diceImg.src = `dice-${[rollResult]}.png`;
    console.log(rollResult);
    if (rollResult === 1) {
        if(playerOne.classList.contains('player--active')) {
            playerOne.classList.remove('player--active');
            playerTwo.classList.add('player--active');
            // playerOneTotal.innerHTML = playerOneScore;
            playerOneCurr.innerHTML = 0;
            playerOneScore = 0;
        }else{
            playerTwo.classList.remove('player--active');
            playerOne.classList.add('player--active');
            // playerTwoTotal.innerHTML = playerTwoScore;
            playerTwoCurr.innerHTML = 0;
            playerTwoScore = 0;
        }
    }else{
        if(playerOne.classList.contains('player--active')){
            // playerOneScore = 0;
            playerOneScore += rollResult;
            playerOneCurr.innerHTML = playerOneScore;
            console.log(playerOneScore);
        }else{
            // playerTwoScore = 0;
            playerTwoScore += rollResult;
            playerTwoCurr.innerHTML = playerTwoScore;
            console.log(playerTwoScore);
        }
    }
}


const holdScore = () => {
    if(playerOne.classList.contains('player--active')){
        playerOneTotScore += playerOneScore;
        playerOneTotal.innerHTML = playerOneTotScore;
        playerOneScore = 0;
        playerOneCurr.innerHTML = 0;
        playerOne.classList.remove('player--active');
        playerTwo.classList.add('player--active');
        if(playerOneTotScore >= 100){
            alert('Player 1 wins!');
            resetGame();
        }
    }else{
        playerTwoTotScore += playerTwoScore;
        playerTwoTotal.innerHTML = playerTwoTotScore;
        playerTwoScore = 0;
        playerTwoCurr.innerHTML = 0;
        playerTwo.classList.remove('player--active');
        playerOne.classList.add('player--active');
        if(playerTwoTotScore >= 100){
            alert('Player 2 wins!');
            resetGame();
        }
    }
}


const resetGame = () => {
    const score = document.querySelectorAll('.score');
    const currentScore = document.querySelectorAll('.current-score');
    playerOneTotScore = 0;
    playerTwoTotScore = 0;
    score.forEach(score => {
        score.innerHTML = 0;
    });
    currentScore.forEach(currentScore => {
        currentScore.innerHTML = 0;
    });
    diceImg.classList.add('hidden');
    playerOne.classList.add('player--active');
    playerTwo.classList.remove('player--active');
}


hold.addEventListener('click', holdScore);
roll.addEventListener('click', rollDice);
reset.addEventListener('click', resetGame);