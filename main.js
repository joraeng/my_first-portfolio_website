'use strict'

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // navbar의 크기보다 스크롤 된 크기가 더 크면 navbar를 진하게 해줄 클래스 추가
    // navbar의 크기보다 스크롤 크기가 더 작아지면 다시 클래스를 지워서 투명 상태가 되도록
    if (window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});


// Handdle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    // 클릭을 한 요소의 링크를 변수에 저장한다
    if(link == null){
        return ;
    }
    

    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: "smooth"});
});

