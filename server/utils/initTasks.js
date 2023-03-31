import Trade from '../models/BuyTrade.js';
import createStore from '../store/createStore.js';
import actionsReducer from '../store/actionReducer.js';
import {
  GETPAIRPRICEBYINTERVAL,
  GETCANDLESBYINTERVAL,
  GETALLUSERS,
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

export default initTasks;
