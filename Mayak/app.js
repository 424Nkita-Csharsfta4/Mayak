const open = document.getElementById('btn');
const modal__container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click',() =>{
    modal__container.classList.add('show');
});

close.addEventListener('click', () => {
    modal__container.classList.remove('show');
});