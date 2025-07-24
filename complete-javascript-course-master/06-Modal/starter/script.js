'use strict';
const modalButtons = document.querySelectorAll('.show-modal');
for (let button = 0; button < modalButtons.length; button++) {
  modalButtons[button].addEventListener('click', function () {
    document.querySelector('.modal').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden');
  });
}

const closeModal = function () {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
};

document.querySelector('.close-modal').addEventListener('click', closeModal);
document.querySelector('.overlay').addEventListener('click', closeModal);

const escKeyToCloseOverlay = function (event) {
  debugger;
  if (event.key === 'Escape') {
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
  }
};

document.addEventListener('keydown', escKeyToCloseOverlay);
