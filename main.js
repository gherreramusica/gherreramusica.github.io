const bio = document.getElementById('bio');

bio.addEventListener('click', function bio(){
    document.write('HOLA MUNDO');
})

var toggle = document.querySelector('.toggle');
var close = document.querySelector('.close');
var verticalNav = document.querySelector('.verticalNav');

toggle.addEventListener('click', () =>{
    verticalNav.classList.toggle('show');
    toggle.classList.toggle('show');
   
});
close.addEventListener('click', () =>{
    verticalNav.classList.toggle('show');
    close.classList.toggle('show');
    toggle.classList.toggle('hide');
})

//OPACITY

window.addEventListener("scroll", function () {
    let titulo = document.getElementById("titulo");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    titulo.style.opacity = 1.6 - scrollTop / 500;
 });

//PARALAX

//  var titulo = document.querySelector('.titulo');
//  window.addEventListener('scroll', () => {
//    let value = window.scrollY;
//    titulo.style.marginTop = value * 1.1 + 'px';
//     nota.style.marginBottom = value * -.4 + 'px';
//      vinil.style.marginBottom = value * -.7 + '10px';
//   })

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

//timeline

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('mostrar');
//         } else {
//             entry.target.classList.remove('mostrar');
//         }
//     });
// });



// const hidden = document.querySelectorAll('.hidden');
// hidden.forEach((el) => observer.observe(el));





