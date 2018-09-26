var request = require("request");
var url = "<----Your weather api key with complete url--------->";
var weather = require("./asyn-example3.js")
weather(url, function(message) {
	console.log(message);
})



/*request({
	url: url,
	json: true 
}, (error, response, body) => {
	if (error) {
		console.log("unable to fetch the weather");
	}else {
		var result =JSON.stringify(body, null, 4);
		var resultObject = JSON.parse(result);
		var locationName = resultObject.location.name;
		var tempCelsius = resultObject.current.temp_c;
		console.log("It is "+ tempCelsius +" in "+ locationName )
	}
})*/