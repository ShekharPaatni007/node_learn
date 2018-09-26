function doWorkPromises (data) {
	return new Promise((resolve, reject) => {
		//resolve("Happy you work has done successfully")
		reject("something went wrong");
	})
}

doWorkPromises("kuch bhi")
.then((data) => {
	console.log(data)
})
.catch((error) => 
{ 
	console.log(error)
})