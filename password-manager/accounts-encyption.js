var storage = require("node-persist")
var crypto = require("crypto-js")
var vargs = require("yargs")
				.command("create", "create a account", function(yargs) {
					yargs.options({
					name: {
						demand : true,
						description: "website name",
						type : 'string',
					},
					username: {
						demand : true,
						description: "User name",
						type : 'string',
					},
					password: {
						demand : true,
						description: "User password",
						type : 'string',
					},
					masterPassword: {
						demand : true,
						description: "master password",
						type : 'string',
					}

				}).help('help')

				}).help('help').argv;

storage.initSync();

function getAccounts(masterPassword) {
	var accounts = storage.getItemSync("accounts");
	var decryptedAccounts = [];
	if (typeof accounts !== 'undefined') {
		accounts.forEach((account) => {
			account.password = decryptedAccounts(account.password);
			decryptedAccounts.push(account)
		})
	}
	return decryptedAccounts;
}	
function decryptedValue(message, masterPassword) {
	return crypto.AES.decrypt(message.toString(crypto.enc.utf8),masterPassword);
}			

function encryptValue(message, masterPassword) {
	// console.log("encrypt "+ masterPassword )
	return crypto.AES.encrypt(message, masterPassword).toString();
}

function createAccount(account,  masterPassword) {
	var accounts = storage.getItemSync("accounts");
	if (typeof accounts === 'undefined') {
		accounts = [];
	}
	// console.log(masterPassword)
	console.log(encryptValue(account.password, masterPassword))
	account.password = encryptValue(account.password, masterPassword);
	accounts.push(account);
	storage.setItemSync("accounts", accounts)
	// console.log(accounts)
}

console.log(vargs)
var command = vargs._[0];
if (command === 'create') {
	var account= {
		name : vargs.name,
		username : vargs.username,
		password : vargs.password
	};
	try{
	createAccount(account, vargs.masterPassword)
	}catch(e) {
		console.log("unable to create the account")
	}
}