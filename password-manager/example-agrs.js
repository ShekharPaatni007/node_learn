var argv = require("yargs").argv;
var command = argv._[0];
console.log(argvd)
if (command === "hello" && typeof argv.name !== 'undefined') {
	console.log("Hello "+ argv.name);
}else if (command === "hello") {
	console.log("Hello India")
} else {
	console.log("Hello Stranger")
}