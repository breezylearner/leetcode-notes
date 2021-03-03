/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

/*  
问题：怎样取数字？如何处理进位？
解决思路：进位，代表当前的和大于9，而加法计算是“从末位到首位”，因此可以利用slice从末尾取数，模拟加大计算，完成结果。
提示：slice取值是左闭右开，要注意边界设置。
*/
var addStrings = function (num1, num2) {
  let str = "";
  const len = Math.max(num1.length, num2.length); //最大数组长就是遍历的次数
  let step = 0;
  for (let i = -1; i >= -len; i--) {
    const n1 = num1.slice(i, i + 1 || undefined) - 0;
    const n2 = num2.slice(i, i + 1 || undefined) - 0;
    const res = n1 + n2 + step;
    if (res > 9) {
      step = 1;
      str = res - 10 + str;
    } else {
      step = 0;
      str = res + str;
    }
  }
  return step === 0 ? str : step + str;
};
// 时间复杂度：O(N)  空间复杂度：O(1)
