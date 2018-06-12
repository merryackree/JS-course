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

	let hours = document.querySelector('.hours'),
			minutes = document.querySelector('.minutes'),
			seconds = document.querySelector('.seconds');
	
	function displayDate() {
		let d = new Date();
		hours.innerHTML = addZero(d.getHours());
		minutes.innerHTML = addZero(d.getMinutes());
		seconds.innerHTML = addZero(d.getSeconds());
		timer = setTimeout(displayDate, 1000);
	}

let timer = setTimeout(displayDate, 1000);


	function addZero(n) {
		if (n < 10) {
		n = '0' + n;	
		}
		return n
	}





});