var age = 26; //global variable

console.log(age);

function localFunction() {
	var age = 27;
	console.log(age);
}
localFunction();
console.log(age);

