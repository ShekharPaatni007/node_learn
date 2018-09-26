var request = require("request")
var url = "https://openweathermap.org/data/2.5/find?q="
var urlend = "&units=imperial&appid=f2916e1c98d4d6afd06df66166dd4e5a"

module.exports = function(location, callback) {
	console.log(url+encodeURIComponent(location.trim())+urlend)
	request({
		url: url+encodeURIComponent(location.trim())+urlend,
		json: true
	}, function(error, response, body) {
		if (error) {
			callback(error)
		}else {
			try{
			var resultObject = JSON.parse(JSON.stringify(body))
			console.log(resultObject)
			callback("It's is "+ resultObject.list[0].main.temp + " in "+ resultObject.list[0].name)
			}catch(e) {
				console.log(e.message)
			}
		}
	})
}