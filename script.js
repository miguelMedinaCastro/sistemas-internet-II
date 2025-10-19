
const dropdownContainer = document.getElementById('dropdown-container');
const dropdownButton = document.getElementById('dropdown-button');
const dropdownMenu = document.getElementById('dropdown-menu');
const patife = document.getElementById('patife');
const patife2 = document.getElementById('patife2');
const botao1 = document.getElementById('botao1')
const botao2 = document.getElementById('botao2')


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
    patife.classList.toggle('hidden');
    patife2.classList.add('hidden');
});

botao2.addEventListener('click', (event) => {
    event.stopPropagation(); 
    patife2.classList.toggle('hidden');
    patife.classList.add('hidden');
});