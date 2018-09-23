var account = {
	balance : 0
}


 // deposit current balance + amount
 function deposit(account, amount) {
 	return  account.balance += amount;
 }


 //withdraw currentbalance - amount
 function withdraw (account, amount) {
 	if (account.balance >=  amount) {
 		account.balance-=amount;
 		return "you can successfully withdraw "+ amount + " and balance is "+ account.balance;
 	}else{
 		return "Insufficient balance in a account";
 	}
 }

 //getBalance currentbalance
 function getBalance(account) {
 	return "your balance is "+ account.balance
 }



 console.log(withdraw(account, 500))
 console.log(deposit(account, 500000))
 console.log(getBalance(account))
 console.log(withdraw(account, 10000))