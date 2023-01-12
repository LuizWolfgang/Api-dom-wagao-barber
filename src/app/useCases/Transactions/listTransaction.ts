import { Request, Response } from 'express';
import { Transactions } from '../../models/Transactions';

export async function listTransaction(req: Request, res: Response){
  try {
    const transactions = await Transactions.find()
    res.json(transactions)
  } catch(e) {
    console.log(e)
    res.sendStatus(500)
  }
}
