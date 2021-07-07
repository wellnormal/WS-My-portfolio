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
  if ($('main').hasClass('about-main')) {
    let popup = document.querySelector('.about__name');
    let list = document.querySelector('.foto__item');

    popup.addEventListener('mouseover', function () {
      let item = `<li id = "deletes"><img src = "/img/foto.jpg">`;
      list.insertAdjacentHTML('beforeend', item);
    });
    popup.addEventListener('mouseout', function () {
      document.querySelector('#deletes').remove();
    });
  }
}
