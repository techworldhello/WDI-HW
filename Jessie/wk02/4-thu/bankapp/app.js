console.log('bank app');

const BALANCE_CHECKING = 'checking';
const BALANCE_SAVINGS = 'savings';

const balances = {
	[BALANCE_CHECKING]: 0,  
	[BALANCE_SAVINGS]: 0
};

const checkingElements = {
	input: document.querySelector('.checking-input'),
	balance: document.querySelector('.checking-result'),
	btnDeposit: document.getElementById('checking-deposit'),
	btnWithdraw: document.getElementById('checking-withdraw'),
	btnTransfer: document.getElementById('checking-transfer'),
	background: document.querySelector('.checking-acc')
};

const savingsElements = {
	input: document.querySelector('.savings-input'),
	balance: document.querySelector('.savings-result'),
	btnDeposit: document.getElementById('savings-deposit'),
	btnTransfer: document.getElementById('savings-transfer'),
	background: document.querySelector('.savings-acc')
};

let message = document.getElementById('message');

// when savings balance reaches 100k, turn div gold

// user can withdraw past red background, no limits hence liquid bank

function updateDisplay() {
	savingsElements.balance.innerHTML = '$' + balances[BALANCE_SAVINGS].toFixed(2);
	checkingElements.balance.innerHTML = '$' + balances[BALANCE_CHECKING].toFixed(2);

	balances[BALANCE_CHECKING] < 0 ? checkingElements.background.style.backgroundColor 
	= '#d95555' : checkingElements.background.style.backgroundColor = '#C0C0C0';
}

function withdrawFromChecking(account, amount) {
	balances[account] -= parseFloat(amount);
	updateDisplay();
}

function withdrawProtection(account, amount) {
	const withdrawalAmount = parseFloat(amount);
	const amountLeft = balances[account] - withdrawalAmount;
	// const withdrawalAmount = parseFloat(checkingElements.input.value);
	// const amountLeft = balances[BALANCE_CHECKING] - withdrawalAmount;

	// Nothing left in checking
	if (amountLeft <= 0) {
		// Savings has enough funds
		if (balances[BALANCE_SAVINGS] > amountLeft) {
			balances[BALANCE_SAVINGS] += amountLeft;
			balances[BALANCE_CHECKING] = 0;
			console.log('New checking', balances[BALANCE_CHECKING] + amountLeft);
		} else {
			console.log('NO moneyz');
		}
	// Still money left in checking
	} 
	//else {
		//balances[BALANCE_CHECKING] = amountLeft;
	//}
	//updateDisplay()
}

/**
 * Deposit a value to the account and update display
 * @param {String} account BALANCE_CHECKING or BALANCE_SAVING
 * @param {Number} amount Number to add
 */

function deposit(account, amount) {
	balances[account] += parseFloat(amount);
	updateDisplay();
}


function transferFunds(account, amount) {
	if (balances[account] > parseFloat(amount)) {
		balances[account] - amount;
		updateDisplay();
	} else {
		transferInfo.innerHTML = 'You have insufficient funds';
	}
}

//increase by 2% interest every 5 sec to encourage saving

function savingsAccInterest() {
	let interestIncrement = balances[BALANCE_SAVINGS] * 2;

	if (balances[BALANCE_SAVINGS] > 0) {
		setInterval(() => {
			balances[BALANCE_SAVINGS] = balances[BALANCE_SAVINGS].toFixed(2) * 1.1;
			if (balances[BALANCE_SAVINGS] > interestIncrement) {
				savingsElements.background.style.backgroundColor = 'gold'
			}
		}, 1000);
	}
}

//when overdraft increase interest by 10% every 5 sec, when reached 50% give an alert

function checkingAccInterest() { 
	let interestDecrement = balances[BALANCE_CHECKING] * 1.5;

	if (balances[BALANCE_CHECKING] <= 0)  
		setInterval(() => {
			balances[BALANCE_CHECKING] = balances[BALANCE_CHECKING].toFixed(2) * 1.1;
			if (balances[BALANCE_CHECKING] <= interestDecrement) {
				message.innerHTML = 'YOU ARE DROWNING IN DEBT.'; 
			}
			updateDisplay();
	}, 5000);
}


checkingElements.btnDeposit.addEventListener('click', () => {
	deposit(BALANCE_CHECKING, checkingElements.input.value);
});

checkingElements.btnWithdraw.addEventListener('click', () => { 
	withdrawFromChecking(BALANCE_CHECKING, checkingElements.input.value);
	withdrawProtection(BALANCE_CHECKING, checkingElements.input.value)
	checkingAccInterest();
});

checkingElements.btnTransfer.addEventListener('click', () => {
	transferFromSavings(BALANCE_CHECKING, checkingElements.input.value);
});

savingsElements.btnDeposit.addEventListener('click', () => { 
	deposit(BALANCE_SAVINGS, savingsElements.input.value);
	savingsAccInterest();
});

savingsElements.btnTransfer.addEventListener('click', () => {
	transferFromSavings(BALANCE_SAVINGS, savingsElements.input.value);
	protectOverdraft(savingsBalance);
});
