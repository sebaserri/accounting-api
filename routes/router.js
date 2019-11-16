'use strict';
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const moment = require('moment');

const TransactionService = require('../service/transaction');
const AccountService = require('../service/account');

const TransactionRequest = require('../utils/TransactionRequest');

const operations = {
  CREDIT: 'credit',
  DEBIT: 'debit'
};

router.get('/', async (req, res, next) => {
  try {
    let transactions = await TransactionService.all();
    res.status(200).json({
      'result': transactions
    });
  } catch (e) {
    console.error(e);
    res.status(e.status || 500).json({
      'message': e.message
    });
  }
});

router.post('/', async (req, res, next) => {
  try {
    const aTransaction = await TransactionRequest.validateRequest(req);

    const account = await AccountService.get();

    switch (aTransaction.type) {
      case operations.CREDIT:
        account.increase(aTransaction.amount);
        break;
      case operations.DEBIT:
        account.decrease(aTransaction.account);
        break;
    }


    const t = await TransactionService.create(aTransaction);
    await AccountService.save(account.balance);

    res.status(201).json({
      'result': {
        'id': t.id
      }
    });
  } catch (e) {
    console.error(e);
    res.status(e.status || 500).json({
      'message': e.message
    });
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    await TransactionRequest.validateTransactionId(req.params.id);
    const t = await TransactionService.findByTransactionId(req.params.id);
    res.status(200).json({
      'result': t
    });
  } catch (e) {
    console.error(e);
    res.status(e.status || 500).json({
      'message': e.message
    });
  }
});

module.exports = router;