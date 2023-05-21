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