import client from '../helpers/binance.js';
import order from '../mocks/buyMock.js';

async function buyAsset(symbol, quantity) {
  const newTrade = await order({
    symbol: symbol,
    side: 'BUY',
    quantity: quantity,
    type: 'MARKET',
  });
 return newTrade
}
async function sellAsset() {}

export { buyAsset, sellAsset };
