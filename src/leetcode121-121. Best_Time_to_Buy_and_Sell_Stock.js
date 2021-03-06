/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = -1;
  let buy = Number.MAX_VALUE; // 让初始buy等于JS最大值,就不影响后面取最小的结果

  for (let price of prices) {
    buy = Math.min(buy, price); //与JS中的最大数比最小,相当于取了prices的最小值
    res = Math.max(res, price - buy); //依次与最小数做差,取其中最大的
  }
  return res;
};
