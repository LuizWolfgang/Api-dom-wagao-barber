import { Request, Response } from 'express';
import { Transactions } from '../../models/Transactions';

export async function cancelTransaction(req: Request, res: Response){
  try {
    const { transactionId } = req.params

    console.log('transactionId', transactionId);

    await Transactions.findByIdAndDelete(transactionId)

    res.sendStatus(204)
  } catch(e) {
    console.log(e)
    res.sendStatus(500)
  }
}
