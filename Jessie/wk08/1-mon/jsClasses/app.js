class bankAccount {
	constructor (type = 'checking', balance = 0) {
		this.type = type;
		this.balance = balance;
		this.history = [];
	}

	getType() {
		return this.type;
	}

	withdraw(num) {
		if (this.balance > num) {
			this.balance -= num;
			this.history.push(`withdrawal amount: ${num}, balance is now ${this.balance}`);
		} 
	}

	deposit(num) {
		this.balance += num;
		this.history.push(`deposit amount: ${num}, balance is now ${this.balance}`);
	}

	showBalance() {
		return this.balance;
	}

	transactionHistory() {
		return this.history;
	}
}

const checking = new bankAccount();
checking.withdraw(3)
checking.deposit(30)
checking.deposit(130)
console.log(checking.getType())
console.log(checking.showBalance())
console.log(checking.transactionHistory())

const savings = new bankAccount('savings', 10);
savings.withdraw(300)
savings.deposit(30)
savings.deposit(130)
console.log(savings.getType())
console.log(savings.showBalance())
console.log(savings.transactionHistory())



