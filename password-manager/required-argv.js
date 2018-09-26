var argv = require("yargs")
.command("hello", "Greet the user", function(yargs) {
	yargs.options({
		name: {
			demand : true,
			alias: 'n',
			description: "Your first name goes here"
		},
		lastname: {
			demand : true,
			alias: 'b',
			description: "Your last name goes here"
		}
	}).help('help');
}).help('help').argv;
console.log(argv);