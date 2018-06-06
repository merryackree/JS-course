var count = 0;
var number = 1;


while (number < 101) {

for ( let i = 1; i < 101; i++) {
	if (number % i == 0) {
		count++;
	}
}
if (count == 2 || count == 1){
	document.write(number + '<br>');
}
count = 0;
number++;
}

