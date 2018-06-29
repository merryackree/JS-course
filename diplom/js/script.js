window.addEventListener('DOMContentLoaded', function(){

	let engineer_btn = document.querySelector('.popup_engineer_btn'),
			engineer_overlay = document.querySelector('.popup_engineer'),
			engineer_close = engineer_overlay.getElementsByClassName('popup_close')[0],
			phone_link = document.getElementsByClassName('phone_link'),
			phone_overlay = document.querySelector('.popup');



	engineer_btn.addEventListener('click', function(e) {
			showModal(engineer_overlay);

	});

	engineer_overlay.addEventListener('click', function(e) {
				hideModal(this, 'popup_engineer', e);
	});

	phone_link[1].addEventListener('click', function(e) {
			e.preventDefault();
			showModal(phone_overlay);
	});

	phone_link[0].addEventListener('click', function(e) {
			e.preventDefault();
			showModal(phone_overlay);
	});

	phone_overlay.addEventListener('click', function(e) {
			hideModal(this, 'popup', e);
	});

	function hideModal(overlay, element, event) {
			if (event.target.classList.contains(element) || event.target.innerHTML.length == 1) {
			overlay.style.display = 'none';
			document.body.classList.remove('noscroll');
		}
	}

	function showModal(overlay) {
			overlay.style.display = 'block';
			document.body.classList.add('noscroll');
	}

});