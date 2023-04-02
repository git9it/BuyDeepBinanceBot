import { buyAsset, sellAsset } from './api/buySell.js';
import { getState, stopFetching } from './api/fetchData.js';
import Trade from './models/BuyTrade.js';
import SellTrade from './models/SellTrade.js';
import 'express-async-errors';

// Get active trades from database
async function getActiveTrades() {
  const trades = await Trade.find();
  const activeTrades = trades.filter((trade) =>
    trade.status.includes('Active')
  );
  console.log(`Found ${activeTrades.length} active trades`);
  return activeTrades;
}

// Check if a trade should be bought
function shouldBuyTrade(state, trade) {
  const { pair, volumeSold } = trade;
  if (state?.data?.candles?.[pair]) {
    const baseAssetVolume = state.data.candles[pair][0].baseAssetVolume;
    console.log(
      `[${pair}]: Now volume is ${baseAssetVolume}. Minimal volume for buy is ${volumeSold}. Should i buy?... ${
        baseAssetVolume >= volumeSold ? 'Yes' : 'No'
      }`
    );
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
function calculateAveragePrice(fills) {
  let totalCost = 0;
  let totalQty = 0;

  for (const fill of fills) {
    totalCost += parseFloat(fill.price) * parseFloat(fill.qty);
    totalQty += parseFloat(fill.qty);
  }

  return totalCost / totalQty;
}

function priceWithInterest(avgPrice, procent) {
  return avgPrice * (1 + procent / 100);
}

// Buy a trade and return the result
async function buyTrade(trade) {
  const { pair, amountToBuy } = trade;
  const result = await buyAsset(pair, amountToBuy);
  if (result) {
    const averagePrice = calculateAveragePrice(result.fills);

    newStatusTradeDB(trade._id);
    stopFetching(pair);
    placeSellOrder(trade, averagePrice);
    console.log(
      `Bought ${pair}! Amount: ${amountToBuy} Price: ${averagePrice}`
    );
    return result;
  } else {
    console.log('Buying failed');
  }
}

async function placeSellOrder(trade, averagePrice) {
  const { sellProcent, pair, amountToBuy, _id } = trade;
  // sell the same amount we bought
  const amountToSell = amountToBuy;
  const sellPrice = priceWithInterest(averagePrice, sellProcent);

  const result = await sellAsset(pair, amountToSell, sellPrice);
  const binanceTradeID = result.clientOrderId;

  try {
    const tradeDB = await SellTrade.create({
      // figure out why 'express-async-errors' doesn't work here
      pair,
      buyPrice: averagePrice.toFixed(4),
      sellPrice: sellPrice.toFixed(4),
      amountToSell,
      binanceTradeID,
      buyTrade: _id,
    });

    console.log(
      `Sell order created! [${pair}] Sell price: ${sellPrice} Procent: ${sellProcent}`
    );
    return tradeDB;
  } catch (err) {
    console.error(err);
  }
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

      state = await initializeState();
    }, ms);
  });
}

export default runBuyer;
