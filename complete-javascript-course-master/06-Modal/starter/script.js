'use strict';

// Select all elenents I need for this project
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const closeModalEl = document.querySelector('.close-modal');
const modalButtons = document.querySelectorAll('.show-modal');

// Loop through all of the modal buttons
for (let button = 0; button < modalButtons.length; button++) {
  modalButtons[button].addEventListener('click', function () {
    //EventLisenefor each button
    // Show the modal and overlay when a button is clicked
    // Remove the hidden class from the modal and overlay
    // This will make them visible
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
  if (event.key === 'Escape') {
    closeModal();
  }
};

document.addEventListener('keydown', escKeyToCloseOverlay);
