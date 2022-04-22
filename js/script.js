// typing script js
var typed = new Typed(".typing",{
    strings: ["Web Desinger","Student","Teacher","Web Developer"],
    typeSpeed:80,
    backSpeed:80,
});

var typed2 = new Typed(".typing_2",{
    strings:["Student","Web Developer","Teacher","Web Desinger"],
    typeSpeed:80,
    backSpeed:80,
});
//show nav menu
var menu =document.querySelector('.nav_menu');
var openbtn = document.querySelector('#open-menu-btn');
var closebtn = document.querySelector('#close-menu-btn');


openbtn.addEventListener('click',() =>{
    menu.style.display ="flex";
    closebtn.style.display="inline-block";
    openbtn.style.display="none";
})
// closebtn.addEventListener('click',() =>{
//     menu.style.display ="none";
//     closebtn.style.display="none";
//     openbtn.style.display="inline-block";
// });
const closeNav = () => {
    menu.style.display = "none";
    closebtn.style.display = "none";
    openbtn.style.display = "inline-block";
}
closebtn.addEventListener('click', closeNav);

// windows scroll
window.addEventListener('scroll', () =>{
  document.querySelector('nav').classList.
  toggle('window-scroll',window.scrollY>100);
})
