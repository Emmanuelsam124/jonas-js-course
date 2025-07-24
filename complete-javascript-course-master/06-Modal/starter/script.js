'use strict';
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const closeModalEl = document.querySelector('.close-modal');
const modalButtons = document.querySelectorAll('.show-modal');

for (let button = 0; button < modalButtons.length; button++) {
  modalButtons[button].addEventListener('click', function () {
    document.querySelector('.modal').classList.remove('hidden');
    document.querySelector('.overlay').classList.remove('hidden');
  });
}

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

closeModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

const escKeyToCloseOverlay = function (event) {
  debugger;
  if (event.key === 'Escape') {
    closeModal();
  }
};

document.addEventListener('keydown', escKeyToCloseOverlay);
