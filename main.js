//MENU FUNCTIONALITY

var toggle = document.querySelector('.toggle');
var close = document.querySelector('.close');
var verticalNav = document.querySelector('.verticalNav');

toggle.addEventListener('click', () =>{
    verticalNav.classList.toggle('show');
    toggle.classList.toggle('show');
   
});


// //OPACITY

    window.addEventListener("scroll", function () {
    let titulo = document.getElementById("titulo");
    let imagen = this.document.getElementById("imagen");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     titulo.style.opacity = 1.6 - scrollTop / 500;
     imagen.style.opacity = 1.6 - scrollTop / 500;
    });

// // //PARALAX

  var titulo = document.querySelector('.titulo');
  window.addEventListener('scroll', () => {
    let value = window.scrollY;
   titulo.style.marginTop = value * 1 + 'px';
     
   });

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

var animado = document.querySelectorAll('.animado');

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animado.length; i++ ){
        let animadoHeight = animado[i].offsetTop;
        if(animadoHeight - 500 < scrollTop) {
            animado[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', mostrarScroll);








