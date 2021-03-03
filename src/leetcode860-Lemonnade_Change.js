/**
 * @param {number[]} bills
 * @return {boolean}
 */

/* 
思路：收到面额给定，情况固定，直接根据情况，计算得到的就好。
     找钱的情况只有两种：收10元，找5元；收20，找15（10+5）
注意：
    1.不要将收到的钱数设置为n，题中明确了收到的钱为：5，10，20 。如果设置为n，就不止有三种情况。
    2.遍历使用 for...of，减少重复代码
 */

var lemonadeChange = function (bills) {
  let five = 0,
    ten = 0;
  for (const bill of bills) {
    if (bill === 5) five++;
    if (bill === 10) {
      five--;
      ten++;
    }
    if (bill === 20) {
      if (ten) {
        ten--;
        five--;
      } else {
        five -= 3;
      }
    }
    if (ten < 0 || five < 0) return false;
  }
  return true; //最后这个不能忘！否则写了没结果！
};
// 时间复杂度：O(N),空间复杂度：O(1)
