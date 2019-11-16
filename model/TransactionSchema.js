const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    effectiveDate: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);