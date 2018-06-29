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


	let message = new Object();
			message.loading = 'Загрузка...';
			message.success = 'Спасибо! Скоро мы с вами свяжемся';
			message.failure = 'Что-то пошло не так';

	let forms = document.getElementsByClassName('form'),	
			statusMessage = document.createElement('div');

			statusMessage.classList.add('status');

		for (let i = 0; i < forms.length; i++) {
			let input = forms[i].getElementsByTagName('input');
			blockChars(input[1]);
			forms[i].addEventListener('submit', function(e) {
				e.preventDefault();
				sendToServer(forms[i]);
			});
		}	


	function sendToServer(targetForm) {

		targetForm.appendChild(statusMessage);

		let request = new XMLHttpRequest();
		request.open("POST", "server.php");
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		let formData = new FormData(targetForm);

		request.send(formData);

		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
				} else {
					statusMessage.innerHTML = message.failure;
				}
			} 
		}

		let inputs = targetForm.getElementsByTagName('input');

		for (let j = 0; j < inputs.length; j++){
			if(inputs[j].value.length > 0) {
				inputs[j].value = '';
			}
		}

	}


	function blockChars(input){
		let invalidChars = ['-', '+', 'e', ',' ,'.', ' '];
		input.setAttribute('type', 'number');
		input.addEventListener('keydown', function(e){
			if(invalidChars.includes(e.key)) {
				e.preventDefault();
			}
		});
	}


});