const getRandomFloat = (min, max) => {
  return Math.random() * (max - min) + min;
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateCandle = () => {
  const now = Date.now();
  const open = Number(getRandomFloat(0.011, 0.012).toFixed(8));
  const high = Number(getRandomFloat(open, 0.0125).toFixed(8));
  const low = Number(getRandomFloat(0.01, open).toFixed(8));
  const close = Number(getRandomFloat(low, high).toFixed(8));
  const volume = Number(getRandomFloat(100, 1000).toFixed(8));
  const baseAssetVolume = Number(getRandomFloat(50, 500).toFixed(8));
  const quoteAssetVolume = Number((baseAssetVolume * close).toFixed(8));
  const trades = getRandomInt(50, 200);
  const candle = {
    openTime: now - 10000,
    open,
    high,
    low,
    close,
    volume,
    closeTime: now,
    quoteVolume: quoteAssetVolume,
    trades,
    baseAssetVolume,
    quoteAssetVolume,
  };
  return candle;
};

setInterval(() => {
  const candle = generateCandle();
  console.log(candle);
}, 10000);
