import client from '../helpers/binance.js';
import createStore from '../store/createStore.js';
import actionsReducer from '../store/actionReducer.js';
import { BUYERROR } from '../store/actions.js';

const store = createStore(actionsReducer);

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

async function getCandlesByInterval(pair, interval = 10000) {
  const intervalID = setInterval(getCandles, interval);
  intervalIDsStore = { ...intervalIDsStore, [pair]: intervalID };
  async function getCandles() {
    const date = new Date(Date.now());

    try {
      const candles = await client.candles({ symbol: pair, limit: 1 });
      state = {
        data: {
          ...state?.data,
          candles: {
            ...state?.data?.candles,
            [pair]: { ...candles },
            updated: date,
          },
        },
      };
      console.log(`${date}: ${JSON.stringify(state)}`);
    } catch (err) {
      store.dispatch({ type: BUYERROR, payload: { err, pair } });
    }
  }
}

async function checkOpenedSellTradeByInterval({ pair, binanceTradeID, dbID }) {
  console.log(arguments);
  const tenMinutes = 1000 * 60 * 10;
  const intervalID = setInterval(getOpenedSellTrade, 20000);
  async function getOpenedSellTrade() {
    const date = new Date(Date.now());

    try {
      const order = await client.getOrder({
        symbol: pair,
        origClientOrderId: binanceTradeID,
      });

      state = {
        data: {
          ...state?.data,
          orders: {
            ...state?.data?.orders,
            [binanceTradeID]: { ...order, dbID: dbID },
          },
        },
      };
      console.log(state);
    } catch (error) {
      console.error(error);
    }
  }
}

function stopFetching(symbol) {
  const intervalID = intervalIDsStore[symbol];
  clearInterval(intervalID);
  delete intervalIDsStore[symbol];
  console.log(`Stop fetching [${symbol}]`);
}

function getState() {
  return state;
}

export {
  getPairPriceByInterval,
  getCandlesByInterval,
  getState,
  checkOpenedSellTradeByInterval,
  stopFetching,
};
