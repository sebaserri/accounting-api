'use strict';

const AccountSchema = require('../model/AccountSchema.js');

module.exports = {
    save: (a) => {
        const balance = a.balance;
        const name = a.name;

        const account = new AccountSchema({
            name,
            balance
        });
        console.log("Balance saved");
        return account.save();
    },

    update: (account) => {
        return AccountSchema.updateOne({
            name: account.name
        }, {
            $set: {
                balance: account.balance
            }
        });
    },
    
    find: (name) => { 
        return AccountSchema.findOne({
            name: name
        });
    },
}