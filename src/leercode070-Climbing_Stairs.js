/**
 * @param {number} n
 * @return {number}
 */
// 解题思想:动态规划图解,并使用滚动数组
var climbStairs = function (n) {
  let p = 0,
    q = 0,
    r = 1;
  for (let i = 1; i <= n; ++i) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};
// 时间复杂度:O(N)  空间复杂度:O(1)
