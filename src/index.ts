import path from 'node:path'
import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes';
import { config } from "dotenv";

config()

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017")
  .then(() =>{

    const app = express();
    app.use(express.json())
    const port = process.env.PORT || 3000;

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      next();
    })

    app.use(router);

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`)
    })
    console.log('conectado ao mongo')
  })
  .catch(() => console.log('Erro ao conectar com o mongoDB'))

