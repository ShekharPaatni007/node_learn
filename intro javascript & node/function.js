function greetUser () {
	console.log("Hello world!");
}

greetUser();

function calculation(firstNumber, secondNumber, methodName) {
	if (methodName === "add") {
		console.log("firstNumber + secondNumber = "+ (firstNumber+secondNumber))
	}else if (methodName === "sub") {
		console.log("firstNumber - secondNumber = "+ parseFloat(firstNumber -secondNumber))
	}else if (methodName === "mul") {
		console.log("firstNumber * secondNumber = "+ firstNumber*secondNumber)
	}else if (methodName === "div") {
		console.log("firstNumber / secondNumber = "+ firstNumber/secondNumber)
	}else{
		console.log("Sorry! our calculator doesn't support")
	}
}

calculation(15,23, "add");


function fullName(firstName, lastName) {
	 return (firstName + " "+ lastName)
}

var fullName = fullName("Shekhar", "Paatni");
console.log(fullName)