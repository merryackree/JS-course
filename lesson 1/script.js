var budget = parseInt(prompt("Ваш бюджет на месяц?", ""));
var name = prompt("Название вашего магазина?", "");

var mainList = {
	shopBudget: budget,
	shopName: name,
	shopGoods: [],
	employees: {},
	open: true
}

 for (let i = 0; i < 3; i++) {
 var type = prompt("Какой тип товаров будем продавать?", "");
 mainList.shopGoods[i] = type;
 }

var oneDayBudget = budget / 30;

alert( `Бюджет на 1 день = ${oneDayBudget}` );