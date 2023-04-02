import client from '../helpers/binance.js';
import order from '../mocks/buyMock.js';
import createStore from '../store/createStore.js';
import actionsReducer from '../store/actionReducer.js';
import { BUYERROR } from '../store/actions.js';

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
async function sellAsset(symbol, quantity, price) {
  return await client.order({
    symbol: symbol,
    side: 'SELL',
    quantity: quantity,
    price: price,
  });
}

export { buyAsset, sellAsset };
