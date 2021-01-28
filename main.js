'use strict'

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}`);
    // navbar의 크기보다 스크롤 된 크기가 더 크면 navbar를 진하게 해줄 클래스 추가
    // navbar의 크기보다 스크롤 크기가 더 작아지면 다시 클래스를 지워서 투명 상태가 되도록
    if (window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
})