'use script';

const diceAudio = new Audio(`dice-roll-sound.mp3`);
const winningAudio = new Audio(`winning-sound.mp3`);
const player1Prompt = prompt('Player 1 name:');
const player2Prompt = prompt('Player 2 name:');
const holdAudio = new Audio('hold-audio.mp3');
const resetAudio = new Audio('game-start.mp3');
document.getElementById('player-name-1').textContent = player1Prompt;
document.getElementById('player-name-2').textContent = player2Prompt;

const btnRoll = document.querySelector('.btn--roll');
let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnHold = document.querySelector('.btn--hold');
let newGame = document.querySelector('.btn--new');

let currentScore, activePlayer, playing, scores;

const init = function () {
  resetAudio.play();
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  diceEl.classList.add('hidden');
  newGame.classList.add('hidden');
  document.querySelector(`.winner-icon--0`).textContent = '';
  document.querySelector(`.winner-icon--1`).textContent = '';

  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 0;
  playing = true;
};

init();

btnRoll.addEventListener('click', function () {
  if (playing) {
    diceAudio.play();
    diceEl.classList.remove('hidden'); //display the image
    let diceNum = Math.trunc(Math.random() * 6 + 1);

    diceEl.classList.remove('roll'); // remove previous animation
    void diceEl.offsetWidth; // trigger reflow (forces restart)
    diceEl.classList.add('roll');
    diceEl.src = `dice-${diceNum}.png`;

    // if dice number is 1, switch players
    if (diceNum === 1) {
      switchPlayer();
    } else {
      currentScore += diceNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

const btnHoldRoll = function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playerWinner();
    } else {
      switchPlayer();
    }
  }
};

const switchPlayer = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
  holdAudio.play();
};

const playerWinner = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  diceEl.classList.add('hidden');
  document.querySelector(`.winner-icon--${activePlayer}`).textContent = '👑';
  playing = false;
  winningAudio.play();
  newGame.classList.remove('hidden');
  confetti();
};

btnHold.addEventListener('click', btnHoldRoll);

newGame.addEventListener('click', init);
