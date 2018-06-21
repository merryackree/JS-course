window.addEventListener('DOMContentLoaded', function(){

	let tab = document.getElementsByClassName('info-header-tab'),
			tabContent = document.getElementsByClassName('info-tabcontent'),
			info = document.getElementsByClassName('info-header')[0];

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

	info.addEventListener('click', function(event){
		let target = event.target;
			if (target.className == 'info-header-tab') {
				for (let i = 0; i < tab.length; i++){
					if ( target == tab[i]) {
						showTabs(i);
						break;
					}
				}
				}			
	});


	
	let deadline = '2018-06-23';

	function getTimeRemaining(endTime) {
		let t = Date.parse(endTime) - Date.parse(new Date()),
				seconds = addZero (Math.floor( t / 1000 % 60)),
				minutes = addZero (Math.floor( t / 1000 / 60 % 60)),
				hours = addZero(Math.floor( t / (1000 * 60 * 60)));

				if (t == 0 || t < 0){
					return {
					'total': 0,
					};
				} else {
					return {
					'total': t,
					'hours': hours,
					'minutes': minutes,
					'seconds': seconds

				};
				}
				
	};

	function setClock(id, endTime) {

		let timer = document.getElementById(id);
		    hours = document.querySelector('.hours'),
			  minutes = document.querySelector('.minutes'),
			  seconds = document.querySelector('.seconds');

			  function updateClock() {

			  	let t = getTimeRemaining(endTime);
			  		if (t.total == 0) {
			  		clearInterval(timeInterval);
			  		hours.innerHTML = '00',
			  		minutes.innerHTML = '00',
			  		seconds.innerHTML = '00';
			  		} else {
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


function smoothScroll(anchor, duration){

            var startLocation = window.pageYOffset;
            var endLocation = anchor.offsetTop;
            var distance = endLocation - startLocation;
            var increments = distance/(duration/16);
            var stopAnimation;

            var animateScroll = function () {
                window.scrollBy(0, increments);
                stopAnimation();
            };

            if ( increments >= 0 ) {

                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
                        clearInterval(runAnimation);
                    }
                };
            }

            else {

                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( travelled <= (endLocation || 0) ) {
                        clearInterval(runAnimation);
                    }
                };
            }

            var runAnimation = setInterval(animateScroll, 16);
       
        };

        	let menu = document.getElementsByTagName('ul')[0],
							scrollToggle = menu.getElementsByTagName('a');

        [].forEach.call(scrollToggle, function (toggle) {

            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                var dataID = toggle.getAttribute('href');
                var dataTarget = document.querySelector(dataID);

                if (dataTarget) {
                    smoothScroll(dataTarget, 500);
                }

            }, false);

        });


 let more =  document.querySelector('.more'),
 		 overlay = document.querySelector('.overlay'),
 		 popup = document.querySelector('.popup-close'),
 		 desc_btn = document.querySelectorAll('.description-btn');

 		 more.addEventListener('click', function() {
 		 		overlay.style.display = 'block';
 		 		document.body.style.overflow = 'hidden';
 		 	
 		 });

 		 popup.addEventListener('click', function() {
 		 		overlay.style.display = 'none';
 		 		document.body.style.overflow = '';

 		 });

 		 for (let i = 0; i < desc_btn.length; i++){
 		 	 	desc_btn[i].addEventListener('click', function() {
 		 		overlay.style.display = 'block';
 		 		document.body.style.overflow = 'hidden';
 		 }); 	
 		 }

 		 more.addEventListener('touchstart', function(e) {
 		 		e.preventDefault();
 		 		overlay.classList.remove('fade');
 		 	 	overlay.style.display = 'block';
 		 		document.body.style.overflow = 'hidden';
 		 });
class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	useStyle() {
		let div = document.createElement('div');
		document.body.appendChild(div);
		div.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
		div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign} `;

	}

}
	
	const divStyle = new Options(200, 700, 'orange', 18, 'center');

	divStyle.useStyle();


	let message = new Object();
			message.loading = 'Загрузка...';
			message.success = 'Спасибо! Скоро мы с вами свяжемся';
			message.failure = 'Что-то пошло не так';

	let form1 = document.getElementsByClassName('main-form')[0],	
			form2 = document.getElementById('form'),
			input1 = form1.getElementsByTagName('input'),
			input2 = form2.getElementsByTagName('input'),
			statusMessage = document.createElement('div');
			statusMessage.classList.add('status');

	function sendToServer(targetForm, targetInput) {

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

		for (let i = 0; i < targetInput.length; i++){
			targetInput[i].value = '';
		}
	}

	form1.addEventListener('submit', function(e){
		e.preventDefault();
		sendToServer(form1,input1);
	});

	form2.addEventListener('submit', function(e){
		e.preventDefault();
		sendToServer(form2,input2);
	});


});

