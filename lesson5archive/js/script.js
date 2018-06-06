let points = document.getElementsByClassName('menu-item'),
	menu = document.querySelector('.menu');

let five = document.createElement('li');
five.classList.add('menu-item');
five.textContent = 'Пятый пункт';
menu.insertBefore(points[2], points[1]);
menu.appendChild(five);

let ad = document.querySelector('.adv');
let column = document.querySelectorAll('.column');
column = column[1];

column.removeChild(ad);

let apple = document.getElementById('title');
apple.textContent = 'Мы продаем только подлинную технику Apple';

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

let userText = document.getElementById('prompt'),
    feedback = prompt("Ваше мнение о технике Apple?");

userText.textContent = feedback;





