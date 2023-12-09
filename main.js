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
const rectangle4 = document.querySelector('.rectangle4')
const rectangle5 = document.querySelector('.rectangle5')
const rectangle6 = document.querySelector('.rectangle6')
const rectangle7 = document.querySelector('.rectangle7')
const rectangle8 = document.querySelector('.rectangle8')
const rectangle9 = document.querySelector('.rectangle9')
const rectangle10 = document.querySelector('.rectangle10')
const rectangle11 = document.querySelector('.rectangle11')
const rectangle12 = document.querySelector('.rectangle12')
const rectangle13 = document.querySelector('.rectangle13')
const green1 = document.querySelector('.green1')
const green2 = document.querySelector('.green2')
const green3 = document.querySelector('.green3')
const green4 = document.querySelector('.green4')
const green5 = document.querySelector('.green5')


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


rectangle4.addEventListener('click',()=>{
    rectangle4.classList.toggle('mwvane1')
    green1.textContent = 'luka'
    green2.textContent = 'lukadze'
    green3.textContent = '18wlis'
    green5.textContent = '7year'
    
})
rectangle5.addEventListener('click',()=>{
    rectangle5.classList.toggle('mwvane1')
    green1.textContent = 'vano'
    green2.textContent = 'vanodze'
    green3.textContent = '20wlis'
    green5.textContent = '3year'
})
rectangle6.addEventListener('click',()=>{
    rectangle6.classList.toggle('mwvane1')
    green1.textContent = 'gio'
    green2.textContent = 'giodze'
    green3.textContent = '30wlis'
    green5.textContent = '4year'
    
})
rectangle7.addEventListener('click',()=>{
    rectangle7.classList.toggle('mwvane1')
    green1.textContent = 'reedu'
    green2.textContent = 'reedu2'
    green3.textContent = '3wlis'
    green5.textContent = '10month'
    
})
rectangle8.addEventListener('click',()=>{
    rectangle8.classList.toggle('mwvane1')
    green1.textContent = 'zuka'
    green2.textContent = 'sutidze'
    green3.textContent = '16wlis'
    green5.textContent = ' 2year'
    
})
rectangle9.addEventListener('click',()=>{
    rectangle9.classList.toggle('mwvane1')
    green1.textContent = 'tengo'
    green2.textContent = 'kajrisvili'
    green3.textContent = '27wlis'
    green5.textContent = 'year'
    
})
rectangle10.addEventListener('click',()=>{
    rectangle10.classList.toggle('mwvane1')
    green1.textContent = 'dato'
    green2.textContent = 'diasamidze'
    green3.textContent = '21wlis'
    green5.textContent = 'only 8 month'
    
})
rectangle11.addEventListener('click',()=>{
    rectangle11.classList.toggle('mwvane1')
    green1.textContent = 'lasha'
    green2.textContent = 'lashadze'
    green3.textContent = '9wlis'
    green5.textContent = 'only month'
    
})
rectangle12.addEventListener('click',()=>{
    rectangle12.classList.toggle('mwvane1')
    green1.textContent = 'nika'
    green2.textContent = 'nikadze'
    green3.textContent = '29wlis'
    green5.textContent = 'every year'
    
})
rectangle13.addEventListener('click',()=>{
    rectangle13.classList.toggle('mwvane1')
    green1.textContent = 'giorgi'
    green2.textContent = 'bachidze'
    green3.textContent = '19wlis'
    green5.textContent = 'Every month'
    
})