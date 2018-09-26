var storage = require("node-persist");
storage.initSync();
var argsv = require("yargs").argv;

console.log(argsv)
function createAccount(account) {
	var accountsDetails = storage.getItemSync("accounts");
	if (typeof accountsDetails === 'undefined') {
		accountsDetails = [];
	}
	accountsDetails.push(account);
	storage.setItemSync("accounts", accountsDetails)
}

createAccount(argsv.account);

console.log(storage.getItemSync("accounts"))


