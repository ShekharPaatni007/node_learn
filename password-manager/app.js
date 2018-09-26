
var storage = require("node-persist");
var argsv = require('yargs')
			.command("create", "It will create a new account", function (yargs) {
				yargs.options({
					name: {
						demand: true,
						alias: 'n',
						description : "Website name which password will save",
						type: 'string'
					},
					username: {
						demand: true,
						alias: 'uname',
						description: "login username",
						type: 'string'
					},
					password: {
						demand:  true,
						alias: 'pwd',
						description: "login password",
						type: "string"
					}
				}).help('help')
			}).command("get", "getting account details", function(yargs) {
				yargs.options({
					name: {
						demand: true,
						alias: 'n',
						description: "username to fetch the details",
						type: "string"
					}
				}).help("help")
			}).help("help")
			.argv;

storage.initSync();
var command = argsv._[0];
if (command === "create" && argsv.name !== '' && argsv.username !== '' && argsv.password !== '') {
	var account = {
		"name" : argsv.name,
		"username" : argsv.username,
		"password" : argsv.password
	}
	try{
	createAccount(account);
	}catch(e) {
		console.log("unable to create the account")
	}
}else if (command === "get" && argsv.name !== "") {
	try{
	console.log(getAccount(argsv.name));
	}catch(e) {
		console.log("unable to the get the account")
	}
}

function createAccount(account) {
	var accounts = storage.getItemSync("accounts");
	if (typeof accounts === 'undefined') {
		accounts = [];
	}
	accounts.push(account);
	storage.setItemSync("accounts", accounts);
	console.log(accounts);
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

console.log(argsv);
