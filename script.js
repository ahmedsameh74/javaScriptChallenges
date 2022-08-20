'use strict';
const btn = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');



const openMopdal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}



// btn.addEventListener('click', openMopdal);
btn.forEach(btn => btn.addEventListener('click', openMopdal));
close.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27 && !modal.classList.contains('hidden')) {
        closeModal();
    }
})
