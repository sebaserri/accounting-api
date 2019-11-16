'use strict';

class Transaction {
  constructor(id, type, amount, effectiveDate) {
    this.id = id;
    this.type = type;
    this.amount = amount;
    this.effectiveDate = effectiveDate;
  }
}

module.exports = Transaction;