/*console.log("starting password manager");
var storage = require("node-persist");
storage.initSync();

// storage.setItemSync("username", "Shekhar Paatni");

var username = storage.getItemSync("username");
console.log("Username save is "+ username)


storage.setItemSync("account", [{
	"name" : "Shekhar Paatni", 
	"balance" : 150000	
}]);
*/

var storage = require("node-persist");

storage.initSync();
// storage.clear(); //clearing the data from the node persist module storage
/*
storage.setItemSync("account", [{
	"name" : "Shekhar Paatni",
	"balance" : 1500000
},{
	"name" : "Sam Paatni", 
	"balance" : 1800000
}]);

var accounts = storage.getItemSync("account");


accounts.push({
	"name" : "rajeev",
	"balance" : 182200
});

storage.setItemSync("account", accounts);

var accountList = storage.getItemSync("account");
console.log(accountList);



storage.setItem("accounts", [{
	"name" : "Sam"
}]).then(() => {
	console.log("Successfully stored value in storage")
}).then(() => {
	console.log("accounts key value which is saved "+ (storage.getItem("accounts")))
}).catch((err) => console.log("Error in storage "+ err))

*/



/*create account
*/

function createAccount (account) {
	var accounts = storage.getItemSync("accounts");
	if (typeof accounts === "undefined") {
		accounts = [];
	}
	accounts.push(account)
	storage.setItemSync("accounts", accounts)
}

function getAccount(accountName) {
	var accounts = storage.getItemSync("accounts");
	var matchedAccount; 
	 accounts.forEach((account) => {
		if (account.name.toLowerCase() === accountName.toLowerCase()) {
			matchedAccount =  account;
		}
	})
	 return matchedAccount;
}

/*var account = {
	"name" : "Facebook",
	"username" : "user1",
	 "password" : "abcdef"
}


createAccount(account)

account = {
	"name" : "gmail",
	"username" : "user2",
	"password"  : "abcdef"
}

createAccount(account)
*/

removeDuplicateValueStorage();
console.log(getAccount("Facebook"))

function removeDuplicateValueStorage() {

	var accounts = storage.getItemSync("accounts");
	var seperated =[];
	accounts.forEach((account) => {
		var unique = false;	
		seperated.forEach((seperated) => {
			if(account.name === seperated.name) {
				unique = true;
	     	}
		})
		if(!unique){
	    	seperated.push(account);
		}
	})
	storage.setItemSync("accounts", seperated)
}


storage.setItemSync("name", "Shekhar Paatni");
