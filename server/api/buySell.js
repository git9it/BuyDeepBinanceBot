import client from '../helpers/binance.js';
import order from '../mocks/buyMock.js';

async function buyAsset(symbol, quantity) {
  const newTrade = await order({
    symbol: 'XLMETH',
    side: 'BUY',
    quantity: '100',
    type: 'MARKET',
  });
 return newTrade
}
async function sellAsset() {}

export { buyAsset, sellAsset };
