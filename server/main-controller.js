import { buyAsset, sellAsset } from './api/buySell.js';
import { getState, stopFetching } from './api/fetchData.js';
import Trade from './models/Trade.js';

// Get active trades from database
async function getActiveTrades() {
  const trades = await Trade.find();
  return trades.filter((trade) => trade.status.includes('Active'));
}

// Check if a trade should be bought
function shouldBuyTrade(state, trade) {
  const { pair, volumeSold } = trade;
  if (state?.data?.candles?.[pair]) {
    const baseAssetVolume = state.data.candles[pair][0].baseAssetVolume;

    return baseAssetVolume >= volumeSold;
  }
  return false;
}

async function newStatusTradeDB(tradeId) {
  const newStatus = { status: 'Completed' };
  const item = await Trade.findOneAndUpdate({ _id: tradeId }, newStatus);
  return item;
}

// Calculate the weighted average price
function calculateAveragePrice(fills){
let totalCost = 0;
let totalQty = 0;

for (const fill of fills) {
  totalCost += parseFloat(fill.price) * parseFloat(fill.qty);
  totalQty += parseFloat(fill.qty);
}

return totalCost / totalQty;
}

function priceWithInterest(avgPrice, procent){
  return avgPrice * (1 + procent / 100);
}

// Buy a trade and return the result
async function buyTrade(trade) {
  const { pair, amountToBuy, sellProcent } = trade;
  const result = await buyAsset(pair, amountToBuy);
   const averagePrice = calculateAveragePrice(result.fills);
const sellPrice = priceWithInterest(averagePrice, sellProcent)
  newStatusTradeDB(trade._id);
  stopFetching(pair);
  sellAsset(pair, amountToBuy, sellPrice);
 
  return result;
}

async function placeSellOrder(){


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
