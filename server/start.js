// start.js

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
import initTasks from './utils/initTasks.js';
import runBuyer from './main-controller.js';

import consoleLogMiddleware from './middleware/logger.js';

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is listening on port ${server.address().port}...`);
});

(async () => {
  try {
    await connectDB(process.env.MONGO_URI).then(() => {
      console.log('Connected to MongoDB');
    });

    const wss = await websocketServer(server);
    app.use(consoleLogMiddleware(wss));
    app.use(express.json());
    app.use('/api/v1/trades', tradeRouter);
    app.use(errorHandlerMiddleware);
    app.use(notFoundMiddleware);

    const ISACTIVE = process.env.ISACTIVE;
    if (ISACTIVE === 'tru') {
      console.log('Server is active');
      initTasks();
      runBuyer(5000);
    }
  } catch (error) {
    console.log(error);
  }
})();
