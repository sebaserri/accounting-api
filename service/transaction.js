'use strict';

const TransactionSchema = require('../model/TransactionSchema.js');

module.exports = {
    create: (aTransaction) => {
        const type = aTransaction.type;
        const amount = aTransaction.amount;
        const effectiveDate = aTransaction.effectiveDate;

        const transaction = new TransactionSchema({
            type,
            amount,
            effectiveDate
        });
        console.log("Transaction is created");
        return transaction.save();
    },

    
    all: () => {
        return TransactionSchema.find();
    },

    findByTransactionId: (id) => {
        return TransactionSchema.findOne({
            id: id
        });
    }
}