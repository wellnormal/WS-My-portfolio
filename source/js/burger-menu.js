$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__body').toggleClass('active')
	})
})

$('.header__burger').click(function(){
  $(this).toggleClass('open');
})
