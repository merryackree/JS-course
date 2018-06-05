function isFloat(n) {
	if (n % 1 != 0) {
		return true;
	} else {
		return false;
	}
}


function calcSum(num) {
	let sum = 0;
	for (let i = 0; i < num; i++){
		if (num % i == 0) {
			sum = sum + i;
		} 
	}
	return sum;
}


function getFriendlyNumbers() {
	let num1, num2;
	let start = parseInt(prompt('Start point: '));
	let end = parseInt(prompt('End point: '));
	if (start > end || start < 0 || end < 0 || isNaN(start) || isNaN(end) || isFloat(start) || isFloat(end)) {
		console.log(false);
		return false;
	}
	let arr = [];
	let count = 0;
	for ( let i = start; i < end; i++) {
		num1 = calcSum(i);
		num2 = calcSum(num1);
		if (num1 != i && num2 == i) {
			arr.push('[' + num1 + ',' + num2 + ']');
			count = count + 1;

		} 
	}

	for ( let m = -1; m < arr.length; m++) {
		m = m + 1;
		delete arr[m];
	}

	if (count == 0){
		arr.push('[]');
	}

	console.log(arr);
 	
}

getFriendlyNumbers();