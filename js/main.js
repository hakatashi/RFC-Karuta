difficulty = null;

$('.difficulties>button').click(function () {
	difficulty = Number($(this).attr('data-difficulty'));
	$('.title-page').transition({
		scale: 0
	}, 300, 'easeInBack');
});
