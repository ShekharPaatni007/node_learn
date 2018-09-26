var request = require("request")
var url = "http://ipinfo.io";
module.exports = function(callback){
	 request({
		url : url,
		json: true
	}, (error, response, body) => {
		if (error) {
			console.log("unable to fetch the response")
		}
		var result = JSON.stringify(body);
		callback(result)
})
}