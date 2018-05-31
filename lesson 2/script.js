var budget = prompt("Ваш бюджет на месяц?");
var name = prompt("Название вашего магазина?");

var mainList = {
	shopBudget: budget,
	shopName: name,
	shopGoods: [],
	employees: {},
	open: true
}

var i = 0;
//Первый способ
 for (i = 0; i < 5; i++) {

 	let a = prompt("Какой тип товаров будем продавать?");

 	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
 		mainList.shopGoods[i] = a;
 	} else {
 		console.log('Произошла ошибка');
 	  }
 
 }

 // Способ второй:
 /* 
	while (i < 5) {

		let a = prompt("Какой тип товаров будем продавать?");

		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
 		mainList.shopGoods[i] = a;
 		i++;
 		} else {
 		console.log('Произошла ошибка');
 	  	  }
  	} */


// Способ третий
/*
do {

 let a = prompt("Какой тип товаров будем продавать?");

  if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
 	  mainList.shopGoods[i] = a;
 	  i++;
  } else {
 		console.log('Произошла ошибка');
 	}
}
while (i < 5);*/


alert( mainList.shopBudget / 30 );

console.log(mainList)