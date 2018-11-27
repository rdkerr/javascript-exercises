function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (array) {
	return array.reduce((a,b)=>a+b,0);
}

function multiply (array) {
	return array.reduce((a,b)=>a*b,1);
}

function power(num1, num2) {
	return num1 ** num2;
}

function factorial(num) {
	if (num ===0) {
		return 1;
	} else if (num < 3) {
		return num;
	}
	let array=new Array(num).fill(1).map((_,i)=>i+1);
	return array.reduce((a,b)=>a*b,1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}