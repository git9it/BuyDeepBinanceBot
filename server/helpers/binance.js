import Binance from 'binance-api-node';
import dotenv from 'dotenv';
dotenv.config();

const binanceOptions = {};


if (process.env.LIVEMODE === 'true') {
  binanceOptions.apiKey = process.env.BINANCE_LIVE_APIKEY;
  binanceOptions.apiSecret = process.env.BINANCE_LIVE_SECRET;
} else {
  binanceOptions.httpBase = process.env.BINANCE_TESTNET_URL;
  binanceOptions.wsBase = process.env.BINANCE_TESTNET_WSS;
  binanceOptions.apiKey = process.env.BINANCE_TESTNET_APIKEY;
  binanceOptions.apiSecret = process.env.BINANCE_TESTNET_SECRET;
}
console.log(binanceOptions);
const client = Binance.default(binanceOptions);

export default client;
