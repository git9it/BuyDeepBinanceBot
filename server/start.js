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
import sellTradeRouter from './routes/sellTradeRoutes.js';
import { initTasks, initCheckTasks } from './utils/initTasks.js';
import { runBuyer, runTradesChecker } from './main-controller.js';

import consoleLogMiddleware from './middleware/logger.js';
import consoleToTxtMiddleware from './middleware/txtlogger.js';

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(consoleToTxtMiddleware);
app.use(express.json());
app.use('/api/v1/trades', tradeRouter);
app.use('/api/v1/selltrades/', sellTradeRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

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

    const ISACTIVE = process.env.ISACTIVE;
    if (ISACTIVE === 'true') {
      console.log('Server is active');
      initTasks();
      initCheckTasks();
      runBuyer(5000);
      runTradesChecker(4000);
    }
  } catch (error) {
    console.log(error);
  }
})();

process.on('uncaughtException', async (err, origin) => {
  console.error(`Caught exception: ${err}\n` + `Exception origin: ${origin}`);

  // process.exit(1);
});

process.on('unhandledRejection', async (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);

  process.exit(1);
});
