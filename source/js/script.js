$('#menu-toggle').click(function(){
  $(this).toggleClass('open');
})

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__body').toggleClass('active')
	})
})


// let image = document.getElementById("image");
let popup = document.querySelector('.about__name');
let list = document.querySelector('.foto-item');

popup.addEventListener("mouseover",function(){
  // image.style.visibility = "visible"
  let item = `<li id = "deletes"><img src = "/img/foto.jpg">`
  list.insertAdjacentHTML("beforeend",item);
  
})
popup.addEventListener("mouseout",function(){
document.querySelector("#deletes").remove()
})
// --------------------------------
import Typed from 'typed.js';
var typed = new Typed('.about__title-animate', {
  strings: [
    'Разработчик',
    'Верстальщик'
  ],
  typeSpeed: 150,
  backDelay: 1800,
  backSpeed: 75,
  loop: true
});