import Trade from '../models/BuyTrade.js';
import SellTrade from '../models/SellTrade.js';
import createStore from '../store/createStore.js';
import actionsReducer from '../store/actionReducer.js';
import {
  GETPAIRPRICEBYINTERVAL,
  GETCANDLESBYINTERVAL,
  CHECKOPENEDSELLTRADES,
} from '../store/actions.js';

const store = createStore(actionsReducer);

const initTasks = async () => {
  const trades = await Trade.find();
  const activeTrades = trades.filter((trade) =>
    trade.status.includes('Active')
  );

  for (const trade of activeTrades) {
    store.dispatch({ type: GETCANDLESBYINTERVAL, payload: trade.pair });
  }
};

const initCheckTasks = async () => {
  console.log('initCheckTasks');
  const trades = await SellTrade.find();
  const activeTrades = trades.filter((trade) =>
    trade.status.includes('Active')
  );

  for (const trade of activeTrades) {
    console.log(trade);
    store.dispatch({
      type: CHECKOPENEDSELLTRADES,
      payload: { pair: trade.pair, binanceTradeID: trade.binanceTradeID },
    });
  }
};

export { initTasks, initCheckTasks };
