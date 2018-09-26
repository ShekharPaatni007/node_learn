var person = {
	name : "shekhar paatni",
	age : 24
}

var personJson = JSON.stringify(person);

console.log(personJson)
console.log(typeof personJson)

var personObject = JSON.parse(personJson)
console.log(personObject.name)
console.log(typeof personObject)


var animal ='{"name" : "dog"}';
var animalObject = JSON.parse(animal);
animalObject.age = 15;

console.log(JSON.stringify(animalObject))