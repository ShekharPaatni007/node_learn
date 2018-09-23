var grades = [100, 50];

//Pushing data at last
grades.push(15);

//pushing data in first index
grades.unshift(18);

//removing data from the end
console.log(grades.pop());

//removing data from the first
console.log(grades.shift())
console.log(grades)

//Pushing data
grades.push(85)
grades.push(19)

//Traversing array and print it one by one.
grades.forEach(function(grades) {
		console.log(grades)
});

//getting first value in an array.
console.log(grades[0])

//gettting the length of the array
console.log(grades.length)

//sum of the all element in grades to totalGrade variable

var totalGrade = 0;

grades.forEach(function(e) {
	totalGrade+=e;
})

console.log("Total Grades is = "+ totalGrade+ 
	" and average grades is = "+ (totalGrade/grades.length))

grades.shift();

//Lambda function 
totalGrade = 0 ; 

grades.forEach((e) => totalGrade+=e)
console.log("******************")
console.log(totalGrade)