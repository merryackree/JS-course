var shopBudget = parseInt(prompt("Ваш бюджет на месяц?", ""));
var shopName = prompt("Название вашего магазина?", "");
var shopGoods = [];
var employees = {};

 for (var i = 0; i < 3; i++) {
 var type = prompt("Какой тип товаров будем продавать?", "");
 shopGoods[i] = type;
 }

var mainList = {
	shopBudget,
	shopName,
	shopGoods,
	employees,
	open: true
}

var oneDayBudget = shopBudget / 30;

alert( `Бюджет на 1 день = ${oneDayBudget}` );