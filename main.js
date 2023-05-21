var toggle = document.querySelector('.toggle');
var close = document.querySelector('.close');
var verticalMenu = document.querySelector('.verticalMenu');

toggle.addEventListener('click', () => {
verticalMenu.classList.toggle('show');
toggle.classList.toggle('hide');
close.classList.toggle('show');  
});
