var user = {};
user.firstName = "Shekhar";
 user.lastName = "paatni";
 user.age = "26";

delete user.age;
console.log(user);
 function greeting(user) {
 	console.log("Hello, "+ user.firstName + " "+ user.lastName)
 }

 greeting(user);

 var pet = {};
 pet.name = "jacky"
 pet.type = "labrador dog"

 function printPet(pet) {
 	console.log("You own a dog "+ pet.type + " type that's' name is "+ pet.name)
 }

 printPet(pet)