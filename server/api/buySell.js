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
async function sellAsset(symbol, quantity, price) {
  return await order({
    symbol: symbol,
    side: 'SELL',
    quantity: quantity,
    price: price,
  });
}

export { buyAsset, sellAsset };
