'use strict';

class Account {
  constructor(balance) {
    this.balance = balance;
  }

  increase(value) {
      this.balance += value; 
  }

  decrease(value) {
      this.balance -= value;
  }

  get balance() {
      return this.balance; 
  }
}

module.exports = Account;