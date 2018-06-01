
let str = 'урок-3-был слишком легким';
str = str[0].toUpperCase() + str.substring(1);

str = str.replace(/-/g, ' ');

let res = str.substr(19, 6);

console.log(str);
console.log(res);

var sum = 0;
let arr = [20, 33, 1, 'Человек', 2, 3];
 for (let i = 0; i < arr.length; i++) {
	if ( isNaN(arr[i]) ) {
		i++;
	}
	else {
		sum = sum + arr[i];
	}
 }

console.log(Math.sqrt(sum));

let stroke = '123 456 789  sometext some text pretty cool letter right here yeah';

function editString () {
	if ((typeof(stroke)) != 'string') {
		console.log('Аргумент не является строкой');
	} else {
		stroke = stroke.replace(/ /g, '');

			if (stroke.length > 50) {
				stroke = stroke.substring(0, 50) + '(...)';
			}
		console.log(stroke);
	}

}

editString();









