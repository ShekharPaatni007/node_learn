var crypto = require("crypto-js");

var secretMessage = "I hid the chips under the couch."
var secretKey = "1234abc"
/*//Encryption Message
var encryptedMessage = crypto.AES.encrypt(secretMessage, secretKey);
console.log(encryptedMessage)

//Decryption Message
var decryptMessage  = crypto.AES.decrypt(encryptedMessage, secretKey);

console.log(decryptMessage.toString(crypto.enc.Utf8))
*/

var secretJson = {
	name: "Shekhar Paatni",
	age : 25
};

var encryptedObject = crypto.AES.encrypt(JSON.stringify(secretJson), secretKey);


var decryptedObject = crypto.AES.decrypt(encryptedObject, secretKey)
console.log(JSON.parse(decryptedObject.toString(crypto.enc.Utf8)))