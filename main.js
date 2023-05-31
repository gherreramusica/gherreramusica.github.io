const bio = document.getElementById('bio');

bio.addEventListener('click', function bio(){
    document.write('HOLA MUNDO');
})

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


//PARALAX

 var titulo = document.querySelector('.titulo');
 var imagen = document.querySelector('.imagen');
 var nota = document.querySelector('.nota');
 var checkpoint = document.querySelector('.checkpoint');
 var vinil = document.querySelector('.vinil');
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    titulo.style.marginTop = value * 1.1 + 'px';
    nota.style.marginBottom = value * -.4 + 'px';
    vinil.style.marginBottom = value * -.7 + '10px';
 })

 //MUSIC PLAYER

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
});



