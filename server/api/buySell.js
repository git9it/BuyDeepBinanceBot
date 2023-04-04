import client from '../helpers/binance.js';
import order from '../mocks/buyMock.js';
import createStore from '../store/createStore.js';
import actionsReducer from '../store/actionReducer.js';
import { BUYERROR, SELLERROR } from '../store/actions.js';

const store = createStore(actionsReducer);

async function buyAsset(pair, quantity) {
  try {
    const newTrade = await client.order({
      symbol: pair,
      side: 'BUY',
      quantity: quantity,
      type: 'MARKET',
    });
    return newTrade;
  } catch (err) {
    store.dispatch({ type: BUYERROR, payload: { err, pair } });
  }
}
async function sellAsset(pair, quantity, price) {
  try {
    return await client.order({
      symbol: pair,
      side: 'SELL',
      quantity: quantity,
      price: price,
    });
  } catch (err) {
    store.dispatch({ type: SELLERROR, payload: { err, pair } });
  }
}

export { buyAsset, sellAsset };
