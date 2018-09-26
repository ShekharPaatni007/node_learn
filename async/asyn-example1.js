setTimeout(function() {
	console.log(1);
}, 1000)

console.log(2);

console.log(3);

function printInASeconds(message, number) {
	setTimeout(()=>{
		console.log(message)
	},number);
}

printInASeconds("hello", 1000)