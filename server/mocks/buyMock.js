async function order(params) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    symbol: params.symbol,
    orderId: Math.floor(Math.random() * 1000000),
    clientOrderId: Math.random().toString(36).substring(7),
    transactTime: Date.now(),
    price: '0.00020000',
    origQty: params.quantity,
    executedQty: params.quantity,
    status: 'NEW',
    timeInForce: 'GTC',
    type: params.type,
    side: params.side,
    fills: [
      {
        price: '317.19000000',
        qty: params.quantity,
        commission: '0.00000000',
        commissionAsset: 'BNB',
        tradeId: 171063,
      },
    ],
  };
}

export default order;
