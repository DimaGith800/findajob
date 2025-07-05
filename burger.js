const burgerMenuButton = document.querySelector('.header_container--burgermenu');
const mobileMenu = document.querySelector('.header_container--menu');
const closeMenuButton = document.querySelector('#closeMenuBtn');

burgerMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('open'); 
});

closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
});