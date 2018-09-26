var request = require("request")
module.exports = function (url, callback) {
	request({
		url:url,
		json: true
	}, function(error, response, body) {
		var responseDTO;
		if (error) {
			callback("unable to fetch the weather")
		}else{
			try{
				var result = JSON.parse(JSON.stringify(body));
				callback("It's is " +result.current.temp_c+ " in "+ result.location.name)
			}catch(e) {
				callback("parse exeption")
			}
		}
	})
}