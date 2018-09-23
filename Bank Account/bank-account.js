//Containing all accounts informations
var accounts = [];

//First account created
var account = {};
account.username  = "Sam paatni"; 
account.balance = 15000;
//First account added into the system
accounts.push(account);

account = {};
//second account created
account.username = "Shekhar Paatni"
account.balance = 350000;
createAccount(account)
getAllAccountDetails();

//creating an account
function createAccount(account) {
	accounts.push(account);
}

//print all accounts detail
function getAllAccountDetails () {
	console.log("***********List of Accounts **********")
	accounts.forEach((account) => console.log("Account username = "+
		account.username+" and balance amount is = "+ account.balance))
}

//get account detail by username
function getAccountDetail (username) {
	var accountDetail = {}
	if (username !== undefined) {
		accounts.forEach((account) => {
			if (account.username === "Sam paatni") {
				accountDetail.username = account.username;
				accountDetail.balance = account.balance;
			}
		})
	}else {
		accountDetail.error = "username should not be empty";
	}
	return accountDetail;
}

var accountDetails = getAccountDetail("Sam paatni")
// console.log(accountDetails);

//deposit money into the account
function deposit(username, amomunt) {
	var totalBalance;
	if (typeof amomunt === "number") {
		for (var i = 0; i < accounts.length; i++) {
			if (accounts[i].username.toLowerCase() == username.toLowerCase()) {
				accounts[i].balance+=amomunt;
				totalBalance = accounts[i].balance;
			}
		}
	}else{
		 console.log("it is not a number")
	}
	// console.log("Successfully deposit amount in your account and total amount is "+ totalBalance)
}
//getting balance of  the account
function getBalance(username) {
	var balance = 0;
	accounts.forEach((account) => {
		if (account.username.toLowerCase() === username.toLowerCase()) {
			// console.log("**********"+ account.username)
			balance = account.balance;
		}
	})
	return balance
}

deposit("Sam Paatni", 50000)
var accountBalance = getBalance("Sam Paatni")

console.log("your account balance is "+ accountBalance)

//withdraw from the account
function withdraw(username,  amount) {
	var status;
	accounts.forEach((account) => {
		if (account.username.toLowerCase() === username.toLowerCase()) {
			if (account.balance > amount) {
				account.balance-=amount;
				status = "Successfully withdraw the amount and balance is "+ account.balance
			}else{
				status = "Insufficient balance";
			}
		}
	})
	return status;
}

console.log(withdraw("Sam Paatni", 50000))
