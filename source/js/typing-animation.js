import Typed from 'typed.js';

if ($('main').hasClass('about-main')) {
  var typed = new Typed('.about__title-animate', {
    strings: ['Разработчик', 'Верстальщик'],
    typeSpeed: 150,
    backDelay: 1800,
    backSpeed: 75,
    loop: true,
    cursorChar: '_'
  });
}
