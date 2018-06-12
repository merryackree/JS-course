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


	
	let deadline = '2018-06-12';

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


	(function() {

    

        // Function to animate the scroll
        var smoothScroll = function (anchor, duration) {

            // Calculate how far and how fast to scroll
            var startLocation = window.pageYOffset;
            var endLocation = anchor.offsetTop;
            var distance = endLocation - startLocation;
            var increments = distance/(duration/16);
            var stopAnimation;

            // Scroll the page by an increment, and check if it's time to stop
            var animateScroll = function () {
                window.scrollBy(0, increments);
                stopAnimation();
            };

            // If scrolling down
            if ( increments >= 0 ) {
                // Stop animation when you reach the anchor OR the bottom of the page
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
                        clearInterval(runAnimation);
                    }
                };
            }
            // If scrolling up
            else {
                // Stop animation when you reach the anchor OR the top of the page
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( travelled <= (endLocation || 0) ) {
                        clearInterval(runAnimation);
                    }
                };
            }

            // Loop the animation function
            var runAnimation = setInterval(animateScroll, 16);
       
        };

        // Define smooth scroll links
        	let menu = document.getElementsByTagName('ul')[0],
							scrollToggle = menu.getElementsByTagName('a');

        // For each smooth scroll link
        [].forEach.call(scrollToggle, function (toggle) {

            // When the smooth scroll link is clicked
            toggle.addEventListener('click', function(e) {

                // Prevent the default link behavior
                e.preventDefault();

                // Get anchor link and calculate distance from the top
                var dataID = toggle.getAttribute('href');
                var dataTarget = document.querySelector(dataID);

                // If the anchor exists
                if (dataTarget) {
                    // Scroll to the anchor
                    smoothScroll(dataTarget, 500);
                }

            }, false);

        });

    

 })();

});

