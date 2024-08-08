const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openBoton = document.querySelector('.btn-open');
const closeBoton = document.querySelector('.material-symbols-outlined');


const btnOpen = function (){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

openBoton.addEventListener('click', btnOpen)
closeBoton.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)