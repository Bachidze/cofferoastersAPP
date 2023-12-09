const clickcoffe = document.querySelector('.clickcoffe');
const coffemenu = document.querySelector('.coffe-menu');
const iconx = document.querySelector('.iconx');
const button = document.querySelector('.button12')
const mtavaridiv = document.querySelector('.mtavaridiv')
const arrow1 = document.querySelectorAll('.arrow1')
const arrow2 = document.querySelectorAll('.arrow2')
const arrow3 = document.querySelectorAll('.arrow3')
const arrow4 = document.querySelectorAll('.arrow4')
const arrow5 = document.querySelectorAll('.arrow5')
const disap = document.querySelector('.disappear')
const disap1 = document.querySelector('.disappear1')
const disap2 = document.querySelector('.disappear2')
const disap3 = document.querySelector('.disappear3')
const disap4 = document.querySelector('.disappear4')

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



button.addEventListener('click',()=>{
    mtavaridiv.classList.toggle('gamochena')
})




 arrow1.forEach((arrowElement) => {
    arrowElement.addEventListener('click', () => {
        disap.classList.toggle('giorgi111')
        arrowElement.classList.toggle('shemobruneba')
    });
});
 arrow2.forEach((arrowElement) => {
    arrowElement.addEventListener('click', () => {
        disap1.classList.toggle('giorgi111')
        arrowElement.classList.toggle('shemobruneba')
    });
});
 arrow3.forEach((arrowElement) => {
    arrowElement.addEventListener('click', () => {
        disap2.classList.toggle('giorgi111')
        arrowElement.classList.toggle('shemobruneba')
    });
});
 arrow4.forEach((arrowElement) => {
    arrowElement.addEventListener('click', () => {
        disap3.classList.toggle('giorgi111')
        arrowElement.classList.toggle('shemobruneba')
    });
});
 arrow5.forEach((arrowElement) => {
    arrowElement.addEventListener('click', () => {
        disap4.classList.toggle('giorgi111')
        arrowElement.classList.toggle('shemobruneba')
    });
});

