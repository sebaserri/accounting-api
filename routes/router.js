'use strict';
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const moment = require('moment');

const TransactionService = require('../service/transaction');
const AccountService = require('../service/account');
const Account = require('../model/Account');

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

    let account = await AccountService.find('USER');

    
    if (!account) {
      account = new Account('USER', 0);
    }

    switch (aTransaction.type) {
      case operations.CREDIT:
        account.increase(aTransaction.amount);
        break;
      case operations.DEBIT:
        account.decrease(aTransaction.account);
        break;
    }

    if (account.balance < 0) {
      console.error('ERROR: Negative Balance');
      res.status(500).json({
        'message': 'ERROR: Negative Balance'
      });
      next();
      return;
    }

    const t = await TransactionService.create(aTransaction);
    await AccountService.save(account);

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