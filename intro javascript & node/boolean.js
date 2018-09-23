var isValid = true;


if (isValid)  {
	console.log("It is valid")
}

isValid = false
!isValid ? console.log("It is valid")  : console.log("It is not valid")


//fliping the boolean value

function toggleBoolean(isValid) {
	 if (typeof isValid === 'boolean') {
	 	return !isValid;
	 }
}

console.log(toggleBoolean(isValid))