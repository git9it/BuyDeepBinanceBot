import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import websocketServer from './websockets/index.js';

import connectDB from './helpers/mongo.js';

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

app.get('/', function (req, res) {
  res.send('use ws://localhost:5000/websockets');
});

start();
