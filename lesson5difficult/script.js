
var d = new Date();

var now = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ' ' + addZero(d.getDate()) + '.' + addZero(d.getMonth()) + '.' + d.getFullYear();

function addZero(n) {
	if (n < 10) {
	n = '0' + n;	
	}
	return n
}

function showWeekday() {
	let options = { weekday: 'long' };
	document.write(d.toLocaleString('ru-RU', options).toUpperCase()+'<br><br>');
}

showWeekday();

document.write(now);


let	output = document.getElementById('days'),
	btn = document.getElementById('btn');

function main() {
let start = document.getElementById('start').value,
	end = document.getElementById('end').value,
	startDate = new Date(start),
	endDate = new Date(end);
	output.value = Math.abs(calcDays(startDate, endDate));
}

function calcDays(date1, date2) {
	let oneday = 1000*60*60*24;
	let date1m = date1.getTime();
	let date2m = date2.getTime();
	let differencem = date1m - date2m;
	return Math.round(differencem/oneday);
}

btn.addEventListener("click",function(){
	main();
})








