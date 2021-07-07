var waiting = new Promise(function (resolve) {
  setTimeout(resolve, 800);
});

$(window).on('load', function () {
  waiting.then(function () {
    var $preloader = $('.preloader'),
      $loader = $preloader.find('.preloader__loader');
    $loader.fadeOut();
    $preloader.delay(250).fadeOut(200);
  });
});
