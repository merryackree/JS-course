window.addEventListener('DOMContentLoaded', function(){

			//Modals

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
			statusMessage.textContent = '';
			// document.body.classList.remove('noscroll');
		}
	}

	function showModal(overlay) {
			overlay.classList.add('fadeIn');
			overlay.style.display = 'block';
			// document.body.classList.add('noscroll');
	}


		//Ajax modals

	let message = new Object();
			message.loading = 'Загрузка...';
			message.success = 'Спасибо! Скоро мы с вами свяжемся';
			message.failure = 'Что-то пошло не так';

	let forms = document.getElementsByClassName('form'),	
			statusMessage = document.createElement('div');

			statusMessage.classList.add('status');
			statusMessage.textContent = '';

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


			//Slider tabs

let tab = document.getElementsByClassName('glazing_block'),
			slider = document.getElementsByClassName('glazing_slider')[0],
			sliderLinks = slider.getElementsByTagName('a');

let tabRows = ['tree', 'aluminum', 'plastic', 'french', 'rise'];
		for (let i = 0; i < tabRows.length; i++) {
			document.querySelector(`.${tabRows[i]}`).classList.add('tab-content');
		}

let tabContent = document.getElementsByClassName('tab-content');

	function hideTabs(a){
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}


	hideTabs(1);

	function showTabs(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabs(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}

	}

	for (let i = 0; i < tab.length; i++) {
		tab[i].addEventListener('click', function(e) {
			for(let j = 0; j < sliderLinks.length; j++) {
				sliderLinks[j].classList.remove('active');
			}
			sliderLinks[i].classList.add('active');
			e.preventDefault();
			showTabs(i);
		});
	}


		//Calc

	let priceBtn = document.querySelectorAll('.glazing_price_btn'),
			popup_calc = document.getElementsByClassName('popup_calc')[0],
			balcon = document.getElementsByClassName('balcon_icons')[0];
			balconIcons = balcon.getElementsByTagName('a'),
			bigImg = document.querySelector('.big_img'),
			balconImage = bigImg.getElementsByTagName('img'),
			userWidth = popup_calc.querySelector('#width'),
			userHeight = popup_calc.querySelector('#height'),
			nextBtn = popup_calc.querySelector('.popup_calc_button'),
			calcProfileOverlay = document.getElementsByClassName('popup_calc_profile')[0];
			calcProfileBtn = document.getElementsByClassName('popup_calc_profile_button')[0],
			calcEndOverlay = document.querySelector('.popup_calc_end'),
			mainOverlay = document.querySelector('.popup_calc_content'),
			calcPrefs = {};


	blockChars(userWidth);
	blockChars(userHeight);

	for (let i = 0; i < priceBtn.length; i++) {
			priceBtn[i].addEventListener('click', function() {
				showModal(popup_calc);
			});
	}


	for (let i = 0; i < balconIcons.length; i++) {
			balconIcons[i].addEventListener('click', function(e) {
			e.preventDefault();
			for (let m = 0; m < balconIcons.length; m++){
				balconIcons[m].querySelector('img').style.cssText = "height: 40px";
			}
			balconIcons[i].querySelector('img').style.cssText = "height: 54px";
			calcPrefs.windowsType = balconIcons[i].className;
			if (balconImage[i].outerHTML.indexOf(balconIcons[i].className) != -1) {
				for(let j = 0; j < balconImage.length; j++) {
					balconImage[j].setAttribute('id', 'type0');
				}
				balconImage[i].setAttribute('id', 'type1');
			} 
			});
	}

	let newMess = document.createElement('div');

	nextBtn.addEventListener('click', () => {
		newMess.textContent = '';
		if (userWidth.value != '' && userHeight.value != ''){
		calcPrefs.width = userWidth.value;
		calcPrefs.height = userHeight.value;
		popup_calc.style.display = 'none';
		showModal(calcProfileOverlay);
		} else {
			mainOverlay.appendChild(newMess);
			newMess.textContent = '';
			newMess.textContent = 'Вы не ввели значения';		
		}
	});

	let warm = document.getElementsByName('checkbox-test')[1],
			cold = document.getElementsByName('checkbox-test')[0];

	warm.addEventListener('change', () => {
		if (warm.checked) {
			cold.checked = false;
		}
	});	

	cold.addEventListener('change', () => {
		if (cold.checked) {
			warm.checked = false;
		}
	});	

	calcProfileBtn.addEventListener('click', () =>{
		newMess.textContent = '';
		if (warm.checked || cold.checked){
		calcProfileOverlay.style.display = 'none';
		showModal(calcEndOverlay);
		let materialType = document.querySelector('#view_type');
		calcPrefs.material =	materialType.options[materialType.selectedIndex].value;
			if(warm.checked) {
				calcPrefs.wheather = 'Теплое';
			} else {
				calcPrefs.wheather = 'Холодное';
			}
		} else {
			document.querySelector('.popup_calc_profile_content').appendChild(newMess);
			newMess.textContent = '';
			newMess.textContent = 'Пожалуйста выберите тип погоды';
		}

	});
	
exitCalc(popup_calc);
exitCalc(calcProfileOverlay);
exitCalc(calcEndOverlay);

let calcForm = calcEndOverlay.getElementsByTagName('form')[0];

	calcForm.addEventListener('submit', function(e) {
			
			e.preventDefault()
			let prefsObject = document.createElement('input');
				calcForm.appendChild(prefsObject);
				prefsObject.value = calcPrefs.toString();
				prefsObject.style.display = "none";
				sendToServer(calcForm);
				console.log(calcPrefs);

	});


function exitCalc(overlay) {

			overlay.addEventListener('click', (e) => {
				if (e.target.innerHTML.length == 1) {
					calcPrefs = {};
					overlay.style.display = 'none';
					statusMessage.textContent = '';
				}
			});
}

			//Auto popup after 60 seconds

	let num = 0;
	let interval = setInterval(autoShowModal, 1000);
	function autoShowModal(){
		num++
		if (num >= 60) {
			clearInterval(interval);
			showModal(phone_overlay);
		}
	}


	let deadline = '2018-07-05';

	function getTimeRemaining(endTime) {
		let t = Date.parse(endTime) - Date.parse(new Date()),
				seconds = addZero (Math.floor( t / 1000 % 60)),
				minutes = addZero (Math.floor( t / 1000 / 60 % 60)),
				hours = addZero(Math.floor( t / 1000 / 60 / 60 % 24)),
				days = addZero(Math.floor(t / (1000 * 60 * 60 * 24)));

				if (t == 0 || t < 0){
					return {
					'total': 0,
					};
				} else {
					return {
					'total': t,
					'days' : days,
					'hours': hours,
					'minutes': minutes,
					'seconds': seconds

				};
				}
				
	};

	function setClock(id, endTime) {

		let timer = document.getElementById(id);
				days = document.querySelector('.days'),
		    hours = document.querySelector('.hours'),
			  minutes = document.querySelector('.minutes'),
			  seconds = document.querySelector('.seconds');

			  function updateClock() {

			  	let t = getTimeRemaining(endTime);
			  		if (t.total == 0) {
			  		clearInterval(timeInterval);
			  		hours.innerHTML = '00',
			  		minutes.innerHTML = '00',
			  		seconds.innerHTML = '00',
			  		days.innerHTML = '00';
			  		} else {
			  		days.innerHTML = t.days,
			  		hours.innerHTML = t.hours,
			  		minutes.innerHTML = t.minutes,
			  		seconds.innerHTML = t.seconds;
			  		}	
			  }

			  let timeInterval = setInterval(updateClock, 1000);
	}

	setClock('timer', deadline);


	function addZero(n) {
		if (n < 10) {
		n = '0' + n;	
		}
		return n
	}


});