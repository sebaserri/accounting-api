'use strict';

class Account {
  constructor(name, balance) {
    this.balance = balance;
    this.name = name;
  }

  increase(value) {
      this.balance += value; 
  }

  decrease(value) {
      this.balance -= value;
  }

}

module.exports = Account;