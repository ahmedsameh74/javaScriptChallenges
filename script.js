'use strict';


//variables
let again = document.querySelector('.again');
let check = document.querySelector('.check');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let number = document.querySelector('.number');
let userNumber = document.querySelector('.guess');
let message = document.querySelector('.message');
let body = document.querySelector('body');

let myNumb = Math.trunc(Math.random() * 20) + 1;
let highScore = [];
// console.log(myNumb);


//functions
const checkHandler = e => {
  e.preventDefault();
  const userNumb = Number(userNumber.value);
  number.innerHTML = '?';
  
//   console.log(userNumb);
  if(userNumber.value === '') {
    message.innerHTML = '⛔No number!';
  }
  else if (userNumb === myNumb) {
    number.innerHTML = userNumb;
    myNumb = Math.trunc(Math.random() * 20) + 1;
    message.innerHTML = '🎉Correct number!';
    body.style.backgroundColor = '#60b347';
    highScore.push(Number(score.innerHTML));
    highscore.innerHTML = `${Math.max(...highScore)}`;
    score.innerHTML = 20;
  } 
  //if the guess is hhigher or lower
  else if (userNumb !== myNumb){
    if (score.innerHTML > 1) {
        myNumb > userNumb
          ? (message.innerHTML = '📈Too high!')
          : (message.innerHTML = '📉Too low!');
      ;
      body.style.backgroundColor = '#222';
      score.innerHTML = `${Number(score.innerHTML) - 1}`;
    } else {
      message.innerHTML = '💀You lost!';
      score.innerHTML = 0;
    }
  }
//   console.log(highScore);
};

const againHandler = (e) => {
    e.preventDefault();
    myNumb = Math.trunc(Math.random() * 20) + 1;
    number.innerHTML = '?';
    score.innerHTML = 20;
    userNumber.value = '';
    body.style.backgroundColor = '#222';
    message.innerHTML = 'Start guessing...';
}

//events
check.addEventListener('click', checkHandler);
again.addEventListener('click', againHandler);
