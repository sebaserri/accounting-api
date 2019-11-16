const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    balance: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Account', AccountSchema);