    
function performOperation() {
	let num1 = parseInt(document.getElementById('input1').value);
	let num2 = parseInt(document.getElementById('input2').value);
	let results = [];
	
	if (!isNaN(num1) && !isNaN(num2)) {
		results.push(add(num1, num2));
		results.push(sub(num1, num2));
		results.push(mul(num1, num2));
		results.push(dev(num1, num2));
		displayResult(results);
	} else {
		displayResult('Please enter valid numbers');
	}
}

function add(a, b) {
	debugger;
	console.log("addition");
	return a + b;
}

function sub(a, b) {
	debugger;
	console.log("substraction");
	return a - b;
}

function mul(a, b) {
	debugger;
	console.log("multiplication")
	return a * b;
}

function dev(a, b) {
	debugger;
	console.log("devision");
	
	if(b === 0) {
		alert("deviding by 0!");
		return 0
	}
	
	return a / b;
}

function displayResult(results) {
	const resultElement = document.getElementById('result');
	resultElement.textContent = `The results are: 
									addition: ${results[0]}
									substraction: ${results[1]}
									multiplication: ${results[2]}
									devision: ${results[3]}`;
}
        