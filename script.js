'use strict';

// Lecture 72

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct number!';
// console.log(document.querySelector('.message').textContent);

// secret number and score
document.querySelector('.score').textContent = 10;
document.querySelector('.number').textContent = 13;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

// Lecture 73: Handling click events

const createSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = createSecretNumber();
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is nothing in the input field
  if (!guess) {
    displayMessage('⛔ Не цифра!');

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Ура! Правильно!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈 Слишком большое!' : '📉 Слишком маленькое!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😭 Вы проиграли');
      document.querySelector('.score').textContent = 0;
    }
  }

  // // When the guess number is too high
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😭 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Again button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = createSecretNumber();
  score = 20;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  displayMessage('Начать угадывать...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
