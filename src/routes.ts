import { Router } from "express";

//useCases
import { createTransaction } from './app/useCases/Transactions/createTransaction';
import { listTransaction } from './app/useCases/Transactions/listTransaction';
import { cancelTransaction } from './app/useCases/Transactions/cancelTransaction';

export const router = Router();

//List transaction
router.get('/transactions', listTransaction)

//Create transaction
router.post('/transactions', createTransaction)

//Delete/cancel Transaction
router.delete('/transactions/:transactionId', cancelTransaction)
