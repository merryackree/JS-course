let open = document.getElementById('open-btn'),
	nameValue = document.getElementsByClassName('name-value')[0],
	budgetValue = document.getElementsByClassName('budget-value')[0],
	goodsValue = document.getElementsByClassName('goods-value')[0],
	itemsValue = document.getElementsByClassName('items-value')[0],
	employersValue = document.getElementsByClassName('employers-value')[0],
	discountValue = document.getElementsByClassName('discount-value')[0],
	isopenValue = document.getElementsByClassName('isopen-value')[0],
	goodsType = document.getElementsByClassName('goods-value')[0],
	btn = document.getElementsByTagName('button'),
	goodsItem = document.querySelectorAll('.goods-item'),
	employersHire = document.querySelectorAll('.hire-employers-item'),
	chooseItems = document.querySelector('.choose-item'),
	dailyBudget = document.querySelector('#budget'),
	userTime = document.querySelector('#time');

let budget,
	price;



btn[0].addEventListener('click', () => {
	budget = prompt("Ваш бюджет на месяц?",'21000');

	while (isNaN(budget) || budget == '' || budget == null) {
		budget = prompt("Ваш бюджет на месяц?",'');
	}
	budgetValue.textContent = budget + ' $';

	nameValue.textContent = prompt("Название вашего магазина?",'All In One').toUpperCase();
	mainList.discount = confirm('Будем ли делать скидку?');

			if (mainList.discount == true) {
			discountValue.style.borderColor = 'green';
			discountValue.textContent = 'Скидка 20% на все товары!';
			} else {
			discountValue.style.borderColor = 'red';
			discountValue.textContent = 'Увы, скидок нет :(';
			}
			mainList.isOpen = true;
});

disableButtons(goodsItem.value, btn[1]);
btn[1].addEventListener('click', () => {
			goodsValue.innerHTML = '';
			let list = document.createElement('ul');
			list.classList.add('list');
			goodsValue.appendChild(list);
			let goodsList = [];
			let arr = [];
			    for (let i = 0; i < goodsItem.length; i++) {
			        let a = goodsItem[i].value;
			        if (a != '') {
			        	arr.push(a);
			        }
			        goodsList[i] = document.createElement('li');
			        if ((typeof(a)) === 'string' && (typeof(a)) != null  && a.length < 50 && arr.length > 0) {
			            console.log('Всё верно');
			            mainList.shopGoods[i] = a;
			            goodsList[i].textContent = setCapitalName(mainList.shopGoods[i])
			        } 
			        list.appendChild(goodsList[i]);
			    }
			    

});

chooseItems.addEventListener('change', () => {
	if(mainList.isOpen){
		let items = chooseItems.value;
		if (items == '' || isNaN(items)) {
		mainList.shopItems = items.split(',');
		mainList.shopItems.sort();
		itemsValue.textContent = mainList.shopItems;
		}
	}
});

disableButtons(budget, btn[2]);
btn[2].addEventListener('click', () => {

	dailyBudget.value = Math.round(budget / 30) + '$ в день';

});

disableButtons(employersHire.value, btn[3]);
btn[3].addEventListener('click', () => {
	let reset = '';
	let letters = /^[А-Яа-я]+$/;
		for (let i = 0; i < employersHire.length; i++) {
			let name =	employersHire[i].value;
			if (letters.test(name)){
			mainList.employees[i] = name;
			reset += setCapitalName(mainList.employees[i]) + ', '; 
		} else { 
			employersValue.textContent = reset;
		}
		}
	employersValue.textContent = reset.substr(0, reset.length-2);
});

userTime.addEventListener('input', () =>{
	let time = userTime.value;
	    if (time < 0) {
	        console.log('Это невозможно');
	        mainList.open = false
	    } else if (time > 8 && time < 20) {
	        console.log('Время работать!');
	        mainList.open = true
	    } else if (time < 24) {
	        console.log('Уже поздно');
	        mainList.open = false
	    } else {
	        console.log('В сутках только 24 часа');
	        mainList.open = false;
	    }

		if (mainList.open == true) {
			isopenValue.style.backgroundColor = 'green';
		} else {
			isopenValue.style.backgroundColor = 'red';
		  }
});


function check(n){
	if (mainList.isOpen && n != ''){
		return true;
	} else { 
		return false;
	}
}


var mainList = {
	shopBudget: budget,
	shopName: name,
	shopGoods: [],
	employees: {
	},
	open: true,
	isOpen: false,
	discount: false,
	shopItems: [],
	makeDiscount: function makeDiscount() {
	     if (mainList.discount == true) {
	            price = price * 0.8
	     }
	}

}


function setCapitalName(name) {
	if (name != ''){
    return name[0].toUpperCase() + name.slice(1).toLowerCase() 
    }
}

function disableButtons(input, button){
	document.querySelector('.main-functions').addEventListener('mouseover', () =>{
		for (let i = 1; i < btn.length; i++) {
			if (!check(input)) {
			button.setAttribute('disabled','');
			} else {
				button.removeAttribute('disabled');
			}
		}
})		
}


console.log(mainList.isOpen);