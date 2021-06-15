'use strict';

let score = 20;
let highscore = 0;

const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

checkButton.addEventListener('click', () => {
  const guessValue = Number(document.querySelector('.guess').value);

  if (!guessValue) {
    displayMessage('⛔ No number!');
  } else if (guessValue === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessValue !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guessValue > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

againButton.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
