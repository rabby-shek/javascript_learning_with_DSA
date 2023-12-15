const candles = [3, 2, 1, 3];

const countTheBiggestCandle = (candles) => {
  let len = candles.length;
  if (len === 0) {
    return 0;
  }
  const maxHeight = Math.max(...candles);
  const count = candles.filter((candle) => candle === maxHeight).length;
  return count;
};

countTheBiggestCandle(candles);
