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
    // 클릭한 요소의 data-link 값을 받아와서 scrollTo에 저장
    //scrollTo(element)가 내장하는 함수를 사용. 해당 함수의 내용은 모르지만
    // 해당 값을 가진 ID가 있는 곳으로 넘어가는 함수인 듯 하다
    scrollTo.scrollIntoView({behavior: "smooth"});
});
// Handdle click on "contact me" button on home
const contactbtn = document.querySelector('.home__contact');
contactbtn.addEventListener('click', () =>{
    scrollIntoView('#contact')
});

// Make home slowly fade to trasnparaent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY/homeHeight;
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight /2 ) {
        arrowUp.classList.add('visible');
    }else {
        arrowUp.classList.remove('visible');
    }
})
// Handdle click on the "arrow up" button
arrowUp.addEventListener('click', ()=>{
    scrollIntoView('#home');
});

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    // 버튼을 클릭하면 dataset.filter 값을 받아와서 변수에 저장, 그런데 버튼 속 span을 눌러서
    // 값이 없을 경우 부모 노드의 dataset 값을 참조하도록 한다 
    // 근데 여기서 || 를 써도 저게 동작이 되는 이유가 뭘까..?  -> notion 정리
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter ==null) {
        return;
    }
    //remove selection from the previous item and select the new one
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
            if(filter === '*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    },300);
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}

