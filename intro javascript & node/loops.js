var i = 0;
var countLimit = 8;

//while loop
while(i< countLimit) {
	console.log("while loop and i value is = " + i)
	i++;
}

i=0;
//for loop
for(; i<countLimit; i++) {
		console.log("for loop and i value is = " + i)

}

i=0;

do {
	console.log("do while loop and i value is = " + i)
	i++;
}while(countLimit > i)


function countDown(starting, stopping) {
	if (starting > stopping) {
		for (var i = starting; i >= stopping; i--) {
			console.log(i)
		}
	}else{
		for (var i = starting; i <=stopping; i++) {
			console.log(i)
		}
	}
}

countDown(1, 10)
countDown(10, 1);