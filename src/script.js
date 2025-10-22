
const dropdownContainer = document.getElementById('dropdown-container');
const dropdownButton = document.getElementById('dropdown-button');
const dropdownMenu = document.getElementById('dropdown-menu');
const miguel = document.getElementById('miguel');
const milena = document.getElementById('milena');
const bruno = document.getElementById('bruno');
const botao1 = document.getElementById('botao1');
const botao2 = document.getElementById('botao2');
const botao3 = document.getElementById('botao3');

dropdownButton.addEventListener('click', (event) => {
    event.stopPropagation(); 
    dropdownMenu.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
    if (!dropdownContainer.contains(event.target) && !dropdownMenu.classList.contains('hidden')) {
        dropdownMenu.classList.add('hidden');
    }
});

botao1.addEventListener('click', (event) => {
    event.stopPropagation(); 
    miguel.classList.toggle('hidden');
    bruno.classList.add('hidden');
    milena.classList.add('hidden');
});

botao2.addEventListener('click', (event) => {
    event.stopPropagation(); 
    milena.classList.toggle('hidden');
    bruno.classList.add('hidden');
    miguel.classList.add('hidden');
});

botao3.addEventListener('click', (event) => {
    event.stopPropagation(); 
    bruno.classList.toggle('hidden');
    milena.classList.add('hidden');
    miguel.classList.add('hidden');
});