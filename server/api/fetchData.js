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
        candles: {
          ...state?.data?.candles,
          [symbol]: { ...candles },
          updated: date,
        },
      },
    };
    console.log(`${date}: ${JSON.stringify(state)}`);
  }
}

async function checkOpenedSellTradeByInterval(tradeID, symbol) {
  const tenMinutes = 1000 * 60 * 10;
  const intervalID = setInterval(getOpenedSellTrade, tenMinutes);
  async function getOpenedSellTrade() {
    const date = new Date(Date.now());
    const order = await client.getOrder({
      symbol: symbol,
      orderId: tradeID,
    });

    state = {
      data: {
        ...state?.data,
        orders: {
          ...state?.data?.orders,
          [tradeID]: { ...order },
          updated: date,
        },
      },
    };
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

export {
  getPairPriceByInterval,
  getCandlesByInterval,
  getState,
  checkOpenedSellTradeByInterval,
  stopFetching,
};
