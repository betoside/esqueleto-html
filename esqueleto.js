// js for navigation bar effects on scroll
window.addEventListener('scroll', ()=>{
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// js para o menu mobile
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const navigationItems = document.querySelectorAll('.navigation a');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
});

navigationItems.forEach((navigationItem)=>{
    navigationItem.addEventListener('click', function(){
        menuBtn.classList.remove('active');
        navigation.classList.remove('active');
    });
});



// modal
const boxInfoModals = document.querySelectorAll('.box-info-modal');
const boxesInfo = document.querySelectorAll('.box-info');
const boxInfoCloseBtns = document.querySelectorAll('.box-info-close-btn');

const boxInfoModal = function(modalClick){
    boxInfoModals[modalClick].classList.add('active');
}

boxesInfo.forEach((elemento, i) => {
    elemento.addEventListener('click', ()=>{
        boxInfoModal(i);
    })
});

boxInfoCloseBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        boxInfoModals.forEach((infoModal)=>{
            infoModal.classList.remove('active');
            // console.log(infoModal);
        });
    })
});

// js for scroll to top button
const scrollBtn = document.querySelector('.scrollToTop-btn');
window.addEventListener('scroll', ()=>{
    scrollBtn.classList.toggle('active', window.scrollY > 400);
});

const goTop = ()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
};

scrollBtn.addEventListener('click', goTop);

// js for reveal website elements on scroll
const reveal = ()=>{
    var reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {

        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;

        // console.log('===x===');
        // console.log('window.innerHeight:', windowHeight);
        // console.log('reveals[i].TOP:', revealTop);
        // console.log('calculo:', windowHeight - revealPoint);

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal);
