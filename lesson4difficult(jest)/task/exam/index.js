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


function getFriendlyNumbers(start, end) {
	let num1, num2;
	if (start > end || start < 0 || end < 0 || isNaN(start) || isNaN(end) || isFloat(start) || isFloat(end) || (typeof(start, end)) == 'string') {
		return false;
	}
	let arr = [];
	let count = 0;
	for ( let i = start; i <= end; i++) {
		num1 = calcSum(i);
		num2 = calcSum(num1);
		if (num1 != i && num2 == i) {
			arr.push([num1,num2]);
			count = count + 1;
		} 
	}

	for ( let m = -1; m < arr.length; m++) {
	m = m + 1;
	delete arr[m];
	}
	let myArr =[];
	for (let z = 0; z < arr.length; z++) {
		if (arr[z] != null){
			myArr.push(arr[z]);
		}
	}

	if (count == 0){
		myArr.push();
	}
	return(myArr);	

}

module.exports = {
    firstName: 'Виктор',
    secondName: 'Мериакри',
    task: getFriendlyNumbers
}