class BankAccount {
  #accountNumber;
  #balance;
  #accountHolderName;

  constructor(accountNumber, balance, accountHolderName) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
    this.#accountHolderName = accountHolderName;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (this.#balance >= amount) {
      this.#balance -= amount;
    } else {
      console.log("Insufficient funds.");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }
  deposit(amount) {
    return super.deposit(amount);
  }

  withdraw(amount) {
    return super.withdraw(amount);
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }

  deposit(amount) {
    if (amount > 0) {
      super.deposit(amount);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= super.getBalance()) {
      super.withdraw(amount);
    }
  }
}

const checking = new CheckingAccount("AC001", 1000, "John Doe");
checking.deposit(500);
console.log(checking.getBalance()); // Output: 1500

checking.withdraw(200);
console.log(checking.getBalance()); // Output: 1300

const savings = new SavingsAccount("AC002", 2000, "Jane Smith");
savings.deposit(1000);
console.log(savings.getBalance()); // Output: 3000

savings.withdraw(4000); // Output: Withdrawal failed. Insufficient funds.
console.log(savings.getBalance());
