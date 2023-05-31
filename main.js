var toggle = document.querySelector('.toggle');
var close = document.querySelector('.close');
var verticalNav = document.querySelector('.verticalNav');

toggle.addEventListener('click', () =>{
    verticalNav.classList.toggle('show');
    toggle.classList.toggle('hide');
    close.classList.toggle('show');
});
close.addEventListener('click', () =>{
    verticalNav.classList.toggle('show');
    close.classList.toggle('show');
    toggle.classList.toggle('hide');
})



 var titulo = document.querySelector('.titulo');
 var imagen = document.querySelector('.imagen');
 var nota = document.querySelector('.nota');
 var checkpoint = document.querySelector('.checkpoint');


window.addEventListener('scroll', () => {
    let value = window.scrollY;
   titulo.style.marginTop = value * 1.1 + 'px';
    nota.style.marginBottom = value * 1.6 + 'px';
    // checkpoint.style.marginTop = value * -.9 + 'px';   
 });

player

var atras = document.querySelector('.atras');
var play = document.querySelector('.play');
var stop = document.querySelector('.stop');
var siguiente = document.querySelector('.siguiente');
var audio = document.querySelector('.audio');



play.addEventListener('click', () => {
    audio.play();
});

stop.addEventListener('click', () => {
    audio.pause();
})

var cabezal = document.querySelector('.titulo');

cabezal.textContent= 'Martin';


