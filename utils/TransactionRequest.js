'use strict';
const _ = require('lodash');
const moment = require('moment');
const Transaction = require('../model/Transaction');
const uuidv4 = require('uuid/v4');

const formatDate = (date) => {
    date = moment(date, 'YYYY-MM-DD', true);
    if (date.isValid()) {
      return {
        status: 0,
        value: date
      };
    } else {
      return {
        status: 400,
        message: 'Invalid Format for date'
      };
    }
  
}

module.exports = {

  validateTransactionId: (transactionId) => {
    return new Promise((resolve, reject) => {
      if (!transactionId) {
        reject({
          status: 400,
          message: 'Invalid transactionId'
        });
      }
      resolve();
    });
  }, 

  validateRequest: (req) => {
    return new Promise((resolve, reject) => {

      if (!_.isString(req.body.type)) {
        reject({
          status: 400,
          message: 'Invalid id'
        });
        return;
      }

      if (!_.isNumber(req.body.amount)) {
        reject({
          status: 400,
          message: 'Invalid name'
        });
        return;
      }
      resolve(new Transaction(uuidv4(), req.body.type, req.body.amount, new Date()));
    });
  }
};
