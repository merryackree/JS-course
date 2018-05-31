var week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'.bold(), 'воскресенье'.bold()];
var today = 'четверг'

 for (let i=0; i < week.length; i++) {
	if (week[i] === today) {
		week[i] = week[i].italics();
	}
 }

document.write(week.join('<br>'));

arr = ['35565', '54645', '723423', '134', '3007', '9671', '810123']

 for (let i=0; i < arr.length; i++) {
 	let number = arr[i];
     if (number[0] === '3' || number[0] === '7') {
     	console.log(arr[i]);
     }
 }