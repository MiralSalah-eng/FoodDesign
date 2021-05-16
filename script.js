
window.addEventListener('scroll',function(){
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0)
})
function menuFun() {
toggleMenu=document.querySelector(".toggleMenu");
nav=document.querySelector(".nav");
toggleMenu.classList.toggle('active');
nav.classList.toggle('active')
banner=document.querySelector(".banner");
banner.classList.toggle('active')
}
