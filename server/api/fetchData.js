import client from '../helpers/binance.js';

let state = {};
let intervalIDsStore = {};

async function getPairPriceByInterval(symbol, interval = 2000) {
  const intervalID = setInterval(getPrice, interval);

  async function getPrice() {
    const date = new Date(Date.now());
    const pairPrice = await client.prices({ symbol: symbol });
    state = {
      data: { ...state?.data, pairprice: { ...pairPrice } },
    };
    console.log(`${date}: ${JSON.stringify(state)}`);
  }
}

async function getCandlesByInterval(symbol, interval = 10000) {
  const intervalID = setInterval(getCandles, interval);
  intervalIDsStore = { ...intervalIDsStore, [symbol]: intervalID };
  async function getCandles() {
    const date = new Date(Date.now());
    const candles = await client.candles({ symbol: symbol, limit: 1 });
    state = {
      data: {
        ...state?.data,
        candles: { ...state?.data?.candles, [symbol]: { ...candles }, updated: Date.time },
      },
    };
    console.log(`${date}: ${JSON.stringify(state)}`);
  }
}

function getState() {
  return state;
}

function stopFetching(symbol) {
  const intervalID = intervalIDsStore[symbol];
  clearInterval(intervalID);
  delete intervalIDsStore[symbol];
}

export { getPairPriceByInterval, getCandlesByInterval, getState, stopFetching };
