import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';
import cors from 'cors';
import websocketServer from './websockets/index.js';

import connectDB from './helpers/mongo.js';

import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';

import tradeRouter from './routes/tradeRoutes.js';

app.use(cors());

app.use(express.json());
app.use('/api/v1/trades', tradeRouter);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI).then(() => {
      console.log('Connected to MongoDB');
    });

    let server = app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
    websocketServer(server);
  } catch (error) {
    console.log(error);
  }
};

start();
