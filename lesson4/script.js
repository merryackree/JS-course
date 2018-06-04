let budget,
	name,	
	price = 100;

function start() {
	budget = prompt("Ваш бюджет на месяц?",'');

	while (isNaN(budget) || budget == '' || budget == null){
		budget = prompt("Ваш бюджет на месяц?",'');
	}

	name = prompt("Название вашего магазина?",'').toUpperCase();
}

start();

var mainList = {
	shopBudget: budget,
	shopName: name,
	shopGoods: [],
	employees: {
		workers: []
	},
	open: true,
	discount: true,
	shopItems: [],
	chooseGoods: function chooseGoods(){
		 for (let i = 0; i < 4; i++) {

		 	let a = prompt("Какой тип товаров будем продавать?");

		 	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 && isNaN(a)) {
		 		mainList.shopGoods[i] = a;
		 	} else {
		 		console.log('Пожалуйста введите тип товаров');
		 		i--;
		 	  }
		 }
	},
	makeDiscount: function makeDiscount(discount) {
		if (mainList.discount == true) {
	        price = price * 0.8;
	        console.log(price);
		}
	},
	hireEmployees: function hireEmployees() {
		for (let i = 0; i < 4; i++) {
			let employeesName = prompt("Введите имя сотрудника");
			employeesName = (i+1).toString() + '-' + employeesName;
			mainList.employees.workers[i] = employeesName;
		}
		return mainList.employees.workers;
	},
	showDailyBudget: function showDailyBudget() {
	alert( mainList.shopBudget / 30 );
	},
	chooseShopItems: function chooseShopItems() {
		let items = prompt('Перечеслите через запятую ваши тавары', '');
		mainList.shopItems = items.split(',');
		mainList.shopItems.push(prompt('Подождите, еще ', ''));
		mainList.shopItems.sort();
	},
	listItems: function listItems() {
		document.write('У нас вы сможете купить: ');
		mainList.shopItems.forEach(function(item, i, arr){
			document.write((i+1) + ' : ' + item + ', ');
		})
	},
	listGoods: function listGoods() {
		for (let key in mainList.shopGoods){
			console.log('Наш магазин включает в себя: ' + mainList.shopGoods[key]);
		}
	}

}


console.log(mainList)

