import subHelper from '../helpers/subscribe.js';
import {
  getPairPriceByInterval,
  getCandlesByInterval,
  checkOpenedSellTradeByInterval,
  stopFetching,
} from '../api/fetchData.js';

import BuyTrade from '../models/BuyTrade.js';
import SellTrade from '../models/SellTrade.js';
import {
  GETCANDLESBYINTERVAL,
  GETPAIRPRICEBYINTERVAL,
  CHECKOPENEDSELLTRADES,
  BUYERROR,
  SELLERROR,
} from './actions.js';

const sh = subHelper();

sh.subscribe('getPairPriceByInterval', getPairPriceByInterval);
sh.subscribe('getCandlesByInterval', getCandlesByInterval);
sh.subscribe('checkOpenedSellTradeByInterval', checkOpenedSellTradeByInterval);

const initialState = {};

const actionsReducer = async (state = initialState, action) => {
  console.log(action.type);

  if (action.type === GETPAIRPRICEBYINTERVAL) {
    sh.publish('getPairPriceByInterval', `${action.payload}`);
    console.log(action.payload);
  }

  if (action.type === GETCANDLESBYINTERVAL) {
    sh.publish('getCandlesByInterval', `${action.payload}`);
    console.log(action.payload);
  }

  if (action.type === CHECKOPENEDSELLTRADES) {
    const { pair, binanceTradeID } = action.payload;
    console.log(pair, binanceTradeID);
    sh.publish('checkOpenedSellTradeByInterval', { pair, binanceTradeID });
    // console.log(action.payload);
  }

  if (action.type === BUYERROR) {
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
  }

  if (action.type === SELLERROR) {
    const { pair, err } = action.payload;
    const sellTrades = await SellTrade.find();
    const processingSellTrades = sellTrades.filter((trade) =>
      trade.status.includes('Processing')
    );
    console.log('proc tre ' + processingSellTrades);
    const pairProcessingSellTrades = processingSellTrades.filter((trade) =>
      trade.pair.includes(pair)
    );

    for (let i = 0; i < pairProcessingSellTrades.length; i++) {
      console.log(pairProcessingSellTrades[i]._id);
      await SellTrade.findByIdAndUpdate(pairProcessingSellTrades[i]._id, {
        status: 'Error',
        error: `${err.message}`,
      });
    }
    console.log(`[${pair}] SELL ERROR: ${err}`); //TODO i should add new sell trade after bot bought asset, add new status "Processing", and --
    //TODO -- update db with binance transaction id / or add error status here if transaction failed
  } else {
    return state;
  }
};

export default actionsReducer;
