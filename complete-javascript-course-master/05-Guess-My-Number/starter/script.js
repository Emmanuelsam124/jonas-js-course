let secretNumber = Number(Math.trunc(Math.random() * 20 + 1));
console.log(secretNumber);
// document.querySelector('.number').textContent = secretNumber;

// let guessedNum = Number(document.querySelector('.number').textContent)
let btnCheck = document.querySelector('.check');
let highScore = document.querySelector('.highscore');

let score = 20;
let highScoreNum = 0;

const wrongGuess = function (guessComment) {
  document.querySelector('.message').textContent = guessComment;
  score -= 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').readOnly = false;
};

const gameReset = function () {
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  btnCheck.disabled = false;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  btnCheck.textContent = 'Check!';
  document.querySelector('.guess').readOnly = false;
  // highScoreNum = 0;
  highScore.textContent = highScoreNum;
  document.querySelector('.number').textContent = '?';
  console.log(secretNumber);
};

document.querySelector('.again').addEventListener('click', gameReset);

btnCheck.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  btnCheck.disabled = false;
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
    //
    //
    score -= 1;
    document.querySelector('.score').textContent = score;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎊 Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.score').textContent = score;
    btnCheck.textContent = '⛔ Button disabled';
    document.querySelector('.guess').readOnly = true;
    document.querySelector('.number').textContent = secretNumber;
    btnCheck.disabled = true;
    if (score > highScoreNum) {
      highScoreNum = score;
      highScore.textContent = highScoreNum;
    } else {
      highScore.textContent = highScoreNum;
    }
  } else if (guess > secretNumber) {
    wrongGuess('Too high!');
  } else if (guess < secretNumber) {
    wrongGuess('Too low!');
  }
});
