var name = undefined;
console.log(name) //undefined


function doNothing() {

}

console.log(doNothing()) //undefined


function showProfile(age) {
	 console.log(age)
}

showProfile() //undefined


if (name === undefined) {
	console.log("Checking undefined in if condition")
}

if (typeof x === undefined) {
	 console.log("it is undefined")
}

function greetUser(name) {
	if (name !== undefined) { 
		console.log("Hello "+ name)
	}else {
		console.log("Hello World")
	}
}

greetUser()

console.log(typeof name  == undefined)