import { buyAsset } from './api/buySell.js';
import { getState, stopFetching } from './api/fetchData.js';
import Trade from './models/Trade.js';

// Get active trades from database
async function getActiveTrades() {
  const trades = await Trade.find();
  return trades.filter((trade) => trade.status.includes('Active'));
}

// Check if a trade should be bought
function shouldBuyTrade(state, trade) {
  console.log('should buy trade' + trade);
  console.log('should buy state' + JSON.stringify(state));
  const { pair, volumeSold } = trade;
  if (state?.data?.candles?.[pair]) {
    const baseAssetVolume = state.data.candles[pair][0].baseAssetVolume;
    // console.log('statedata....' + JSON.stringify(state.data.candles[pair]));
    console.log('baseAssetVolume', baseAssetVolume);
    console.log('volumeSold', volumeSold);
    console.log(volumeSold >= baseAssetVolume);
    return baseAssetVolume >= volumeSold;
  }
  return false;
}

async function deleteTradeFromDB(tradeId) {
  return Trade.deleteOne({ _id: tradeId });
}

// Buy a trade and return the result
async function buyTrade(trade) {
  const { pair, amountToBuy } = trade;
  const result = await buyAsset(pair, amountToBuy);
  deleteTradeFromDB(trade._id);
  stopFetching(pair)
  return result;
}

// Buy all trades that should be bought
async function buyActiveTrades(state, activeTrades) {
  const tradesToBuy = activeTrades.filter((trade) =>
    shouldBuyTrade(state, trade)
  );
  const tradesBought = await Promise.all(tradesToBuy.map(buyTrade));
  return tradesBought;
}

// Initialize state by fetching data from the API
async function initializeState() {
  return getState();
}

// Run the buyer by checking for trades to buy at a set interval
async function runBuyer(ms) {
  setImmediate(async () => {
    let state = await initializeState();
    setInterval(async () => {
      const activeTrades = await getActiveTrades();
      const tradesBought = await buyActiveTrades(state, activeTrades);
      console.log('Trades bought:', tradesBought);
      state = await initializeState();
    }, ms);
  });
}

export default runBuyer;
