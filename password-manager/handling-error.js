/*try{
	throw new Error("unable to handle the request");
}catch(e) {
	console.log("something went wrong *********************** "+ e.messages)
}finally {
	console.log("finally executed")
}

console.log("try catch ended")
*/

function doWork() {
	try {
		throw new Error("Unable to do work");
	}catch(e) {
		console.log(e.message)
	}finally {
		console.log("error error bach gaya mai")
	}
}

doWork();