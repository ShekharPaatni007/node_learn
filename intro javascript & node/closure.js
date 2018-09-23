function greetMaker(name) {
	function greet() {
		console.log("Hello "+ name)
	}
	return greet;
}

var greet = greetMaker("shekhar")
greet();


function createAdder(basedNumber) {
	function addbasedNumber(number) {
		return number+basedNumber;
	}
	return addbasedNumber;
}

var addTen = createAdder(10);
console.log(addTen(5));