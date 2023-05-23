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

// var prev = document.querySelector('.prev');
// var next = document.querySelector('.next');
// var carrusel = document.querySelector('.carrusel');

// next.addEventListener('click', () =>{
//     carrusel.scrollLeft += 400;
// });
// prev.addEventListener('click', () =>{
//     carrusel.scrollLeft += '-100';
// })

var titulo = document.querySelector('.titulo');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    titulo.style.marginTop = value * 1 + 'px';
});