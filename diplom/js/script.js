window.addEventListener('DOMContentLoaded', function(){

	let engineer_btn = document.querySelector('.popup_engineer_btn'),
			engineer_overlay = document.querySelector('.popup_engineer'),
			engineer_close = engineer_overlay.getElementsByClassName('popup_close')[0];


	engineer_btn.addEventListener('click', function(e) {
			engineer_overlay.style.display = 'block';
			document.body.classList.add('noscroll');
	});

	engineer_overlay.addEventListener('click', function(e) {
		if (e.target.classList.contains('popup_engineer') || e.target.innerHTML.length == 1) {
			engineer_overlay.style.display = 'none';
			document.body.classList.remove('noscroll');
		}

	});


});