import { Request, Response } from 'express';
import { Transactions } from '../../models/Transactions';

export async function createTransaction(req: Request, res: Response){
  try {
    const {title, amount, category} = req.body

    if(!title || !amount || !category ){
      return res.status(400).json({
        error: 'Todos os campos são obrigatórios'
      })
    }

    const transaction = await Transactions.create({ title, amount, category })
    res.status(201).json(transaction)
  } catch(e) {
    console.log(e)
    res.sendStatus(500)
  }
}
