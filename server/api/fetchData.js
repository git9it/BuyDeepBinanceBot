import client from '../helpers/binance.js';

let state = {};

async function getPairPriceByInterval(symbol, interval = 2000) {
  const intervalID = setInterval(getPrice, interval);
  async function getPrice() {
    const date = new Date(Date.now());
    const pairPrice = await client.prices({ symbol: symbol });
    state = {
      data: { ...state?.data, ...pairPrice },
    };
    console.log(`${date}: ${JSON.stringify(state)}`);
  }
}

async function getCandlesByInterval(symbol, interval = 5000) {
  const intervalID = setInterval(getCandles, interval);
  async function getCandles() {
    const date = new Date(Date.now());
    const candles = await client.candles({ symbol: symbol, limit: 1 });
    state = {
      data: {
        ...state?.data,
        ...candles,
      },
    };
    console.log(`${date}: ${JSON.stringify(state)}`);
  }
}

function getState() {
  return state;
}

export { getPairPriceByInterval, getCandlesByInterval, getState };
