import VanillaTilt from 'vanilla-tilt';

var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i) ? true : false;
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i) ? true : false;
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i) ? true : false;
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Windows()
    );
  },
};
if (!isMobile.any()) {
  VanillaTilt.init(document.querySelectorAll('.skills__card'), {
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 1,
    gyroscope: true,
  });
}
