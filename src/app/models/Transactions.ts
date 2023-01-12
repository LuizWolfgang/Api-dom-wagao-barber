import {model, Schema} from 'mongoose'

export const Transactions = model('Transactions', new Schema({
  title: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ['WAGAO', 'ALISSON', 'BEBIDAS'],
    default: 'WAGAO'
  },
  createdAt: {
    type:Date,
    default: Date.now
  },
}))
