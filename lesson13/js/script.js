$(document).ready( function() {

	function showModal(button) {

		button.on('click', function(e) {
			e.preventDefault();	
			$('.overlay').fadeIn();
			$('.modal').slideDown();
		});
	}

	function hideModal(btn) {
			btn.on('click', function(e) {
				e.preventDefault();
				$('.overlay').fadeOut();
			  $('.modal').slideUp();
			});
	}

	let link = $('nav ul:first li:eq(1) a');
	hideModal($('.close'));
	showModal(link);
	showModal($('.main_btn'));
	showModal($('.main_btna'));

});

