let budget,
	name,	
	price = 100;

function start() {
	budget = prompt("Ваш бюджет на месяц?");

	while (isNaN(budget) || budget == '' || budget == null){
		budget = prompt("Ваш бюджет на месяц?");
	}

	name = prompt("Название вашего магазина?").toUpperCase();
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
	discount: true
}


function chooseGoods(){
	 for (let i = 0; i < 4; i++) {

	 	let a = prompt("Какой тип товаров будем продавать?");

	 	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
	 		mainList.shopGoods[i] = a;
	 	} else {
	 		console.log('Произошла ошибка');
	 		i--;
	 	  }
	 }
}
chooseGoods();


function makeDiscount(discount) {
	if (mainList.discount == true) {
        price = price * 0.8;
        console.log(price);
	}
}
makeDiscount();

function hireEmployees() {
	for (let i = 0; i < 4; i++) {
		let employeesName = prompt("Введите имя сотрудника");
		employeesName = (i+1).toString() + '-' + employeesName;
		mainList.employees.workers[i] = employeesName;
	}
	return mainList.employees.workers;
}

hireEmployees();

function showDailyBudget() {
	alert( mainList.shopBudget / 30 );
}
showDailyBudget();

console.log(mainList)

