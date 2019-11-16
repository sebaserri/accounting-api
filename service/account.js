'use strict';

const AccountSchema = require('../model/AccountSchema.js');

module.exports = {
    save: (a) => {
        const balance = a.balance;

        const account = new AccountSchema({
            balance
        });
        console.log("Balance saved");
        return account.save();
    },

    
    get: () => {
        return AccountSchema.find();
    },
}