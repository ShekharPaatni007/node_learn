var weather = require("./weather.js");
var location = require("./location.js")
var argv = require("yargs").
			command("weather", "getting weather using location", (yargs) => {
				yargs.options({
				location: {
					demand: true,
					type : 'string',
					description: 'enter the location',
					alias: 'l'
				}
			}).help('help')
			}).help('help').argv;

var command = argv._[0];
if (command === "weather") {
	weather(argv.location, function(message) {
	console.log(message)
})

}

location(function(location) {
	var locationObject = JSON.parse(location)
	console.log("city: "+ locationObject.city);
	console.log("ipaddress "+ locationObject.ip)
	console.log("log/lat: "+ locationObject.loc)
})