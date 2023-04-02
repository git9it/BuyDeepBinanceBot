import subHelper from '../helpers/subscribe.js';
import { getPairPriceByInterval, stopFetching } from '../api/fetchData.js';
import { getCandlesByInterval } from '../api/fetchData.js';

import User from '../models/User.js';
import BuyTrade from '../models/BuyTrade.js';
import {
  GETCANDLESBYINTERVAL,
  GETPAIRPRICEBYINTERVAL,
  GETALLUSERS,
  BUYERROR,
} from './actions.js';

const sh = subHelper();

sh.subscribe('getPairPriceByInterval', getPairPriceByInterval);
sh.subscribe('getCandlesByInterval', getCandlesByInterval);

const initialState = {};

const actionsReducer = async (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case GETPAIRPRICEBYINTERVAL:
      sh.publish('getPairPriceByInterval', `${action.payload}`);
      console.log(action.payload);
      break;

    case GETCANDLESBYINTERVAL:
      sh.publish('getCandlesByInterval', `${action.payload}`);
      console.log(action.payload);
      break;

    case GETALLUSERS:
      const allUsers = await User.find({});
      console.log(allUsers);
      break;

    case BUYERROR:
      const { pair, err } = action.payload;
      console.log(err);
      console.log(`Pair [${pair}] stopped due error: ${err.message}`);

      const trades = await BuyTrade.find();
      const activeTrades = trades.filter((trade) =>
        trade.status.includes('Active')
      );

      const pairActiveTrades = activeTrades.filter((trade) =>
        trade.pair.includes(pair)
      );
      console.log(pairActiveTrades);
      for (let i = 0; i < pairActiveTrades.length; i++) {
        console.log(pairActiveTrades[i]._id);
        await BuyTrade.findByIdAndUpdate(pairActiveTrades[i]._id, {
          status: 'Error',
          error: `${err.message}`,
        });
      }
      stopFetching(pair);

      break;

    default:
      return state;
  }
};

export default actionsReducer;
