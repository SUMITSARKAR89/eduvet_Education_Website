// --------------------navigation menu---------------------------- 
const responsiveNav = document.querySelector('.responsive-navbar');
const menuIcon = document.querySelector('#menuIcon');
const closeIcon = document.querySelector('#close');

menuIcon.addEventListener('click', () => {
    responsiveNav.style.top = "0";
    menuIcon.style.display = 'none';
    
});
closeIcon.addEventListener('click', () => {
    responsiveNav.style.top = "-150%";
    menuIcon.style.display = 'block';
});


const linkButton = document.querySelectorAll('.list-link');
// const dropdownContentBtn = document.querySelectorAll('.dropdown-content a');
linkButton.forEach((btn ) => {
    btn.addEventListener('click', () => {
        linkButton.forEach( btn => {
            btn.classList.remove('active-link');
        })
        btn.classList.add('active-link');
    });
});


const historyTwo = document.querySelector('.history-two');
const sliderTwoPrev = document.querySelector('#left-btn');
const sliderTwoNext = document.querySelector('#right-btn');


sliderTwoNext.addEventListener('click', () => {
    historyTwo.style.scrollBehaviour = "smooth";
    historyTwo.scrollLeft += 1280;
    
});
sliderTwoPrev.addEventListener('click', () => {
    historyTwo.style.scrollBehaviour = "smooth";
    historyTwo.scrollLeft -= 1280;
    
});