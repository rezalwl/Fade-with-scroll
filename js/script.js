const bg = document.querySelector('.header');

window.addEventListener('scroll', function(){
    bg.style.opacity = (1 - +window.scrollY/600)
})