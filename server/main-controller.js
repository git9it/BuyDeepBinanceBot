import { buyAsset } from './api/buySell';
import { getState } from './api/fetchData';
import Trade from './models/Trade';

const state = getState()
const activeTrades = []

(async function getTrades() {
 const trades = await Trade.find();
  activeTrades = trades.filter((trade) =>
    trade.status.includes('Active')
  );
})()

c