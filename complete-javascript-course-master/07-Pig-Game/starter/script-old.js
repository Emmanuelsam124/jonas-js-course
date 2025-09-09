'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const holdButton = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// const activePlayerEl = document.querySelector('.player');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

let scores, currentScore, activePlayer;

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  btnRoll.disabled = false;
  btnHold.disabled = false;
  diceEl.classList.add('hidden');
};
init();

newGame.addEventListener('click', init);

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  console.log(dice);

  // 3. Check for rolled 1: if true, switch to next playerCan you generate videos
  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    switchPlayer();
  }
});

const playerWinner = function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  btnRoll.disabled = true;
  btnHold.disabled = true;
};

const switchPlayer = function () {
  // check if current score is greater than or equal to 21
  // If so, current player wins
  if (scores[activePlayer] >= 100) {
    playerWinner();
  } else {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.toggle('player--active');

    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.toggle('player--active');
  }
};
holdButton.addEventListener('click', function () {
  currentScore = scores[activePlayer] + currentScore;
  scores[activePlayer] = currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent = currentScore;
  switchPlayer();
});
