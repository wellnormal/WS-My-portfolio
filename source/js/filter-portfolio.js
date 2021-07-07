$(document).ready(function () {
	var value = function (filter) {
		var filterTypes = ['flowers', 'portf'];

		if (filterTypes.some((filterType) => filterType === filter)) {
			$('.' + filter).show(400);
			$('.site__item')
				.not('.' + filter)
				.hide(100);
		}
	};

	value('flowers');

	$('.portfolio__item').click(function () {
		var filter = $(this).attr('data-filter');

		$(this).addClass('active-item').siblings().removeClass('active-item');

		value(filter);
	});
});