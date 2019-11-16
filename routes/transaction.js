'use strict';
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const moment = require('moment');

const Transaction = require('../service/transaction');
const TransactionRequest = require('../utils/TransactionRequest');

router.get('/', async (req, res, next) => {
  try {
    let transactions = await Transaction.all();
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


    const t = await Transaction.create(aTransaction);
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
    const t = await Transaction.findByTransactionId(req.params.id);
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