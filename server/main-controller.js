import { buyAsset, sellAsset } from './api/buySell.js';
import { getState, stopFetching } from './api/fetchData.js';
import Trade from './models/BuyTrade.js';
import SellTrade from './models/SellTrade.js';

// Get active trades from database
async function getActiveTrades() {
  const trades = await Trade.find();
  const activeTrades = trades.filter((trade) =>
    trade.status.includes('Active')
  );
  console.log(`Found ${activeTrades.length} active trades`);
  return activeTrades;
}

async function getActiveSellTrades() {
  const trades = await SellTrade.find();
  const activeTrades = trades.filter((trade) =>
    trade.status.includes('Active')
  );
  console.log(`Found ${activeTrades.length} active sell trades`);
  return activeTrades;
}

async function checkActiveSellTrades(state, activeSellTrades) {
  const complitedTrades = activeSellTrades.filter((trade) =>
    isTradeComplete(trade)
  );

  return complitedTrades;
}

async function isTradeComplete(trade) {
  const { status } = trade;
  return status === 'FILLED';
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

async function completedStatusSellTradeDB(tradeId) {
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
  const averagePrice = totalCost / totalQty;
  const averagePriceTrimmed = averagePrice.toFixed(4);

  return averagePriceTrimmed;
}

function priceWithInterest(avgPrice, procent) {
  const priceWithInterest = avgPrice * (1 + procent / 100);
  const priceWithInterestTrimmed = priceWithInterest.toFixed(22);
  return priceWithInterestTrimmed;
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
  let tradeDB;

  try {
    tradeDB = await SellTrade.create({
      pair,
      buyPrice: averagePrice,
      sellPrice: Number(sellPrice).toFixed(4),
      amountToSell,
      status: 'Processing',
      buyTrade: _id,
    });
  } catch (err) {
    console.error(err);
  }

  const result = await sellAsset(pair, amountToSell, sellPrice);
  if (result) {
    const binanceTradeID = result.clientOrderId;
    console.log(
      `Sell order created! [${pair}] Sell price: ${sellPrice} Procent: ${sellProcent}`
    );
    const newStatus = { status: 'Active', binanceTradeID: binanceTradeID };
    await SellTrade.findOneAndUpdate({ _id: tradeDB._id }, newStatus);
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

//
async function finishTrades(trades) {
  const tradesFinished = await Promise.all(
    trades.map(completedStatusSellTradeDB)
  );
}

async function runTradesChecker(ms) {
  console.log('runTradesChecker');
  setImmediate(async () => {
    let state = await initializeState();
    setInterval(async () => {
      const activeSellTrades = await getActiveSellTrades();
      const completedTrades = await checkActiveSellTrades(
        state,
        activeSellTrades
      );
      console.log(completedTrades);
      finishTrades(completedTrades);
      state = await initializeState();
    }, ms);
  });
}

export { runBuyer, runTradesChecker };
