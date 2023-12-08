let clickcoffe = document.querySelector('.clickcoffe');
let coffemenu = document.querySelector('.coffe-menu');
let iconx = document.querySelector('.iconx');

clickcoffe.addEventListener('click', () => {
    toggleMenu();
});

iconx.addEventListener('click', () => {
    toggleMenu();
    coffemenu.style.absolute = 'absolute'
    coffemenu.style.transition = '2s'
    coffemenu.style.width = '100%'
});

function toggleMenu() {
    coffemenu.classList.toggle('show-menu');
    coffemenu.classList.toggle('diss');
    clickcoffe.classList.toggle('rotatex');
    iconx.classList.toggle('iconx2');
}
