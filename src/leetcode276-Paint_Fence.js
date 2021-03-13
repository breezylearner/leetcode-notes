/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
/**
一.可作为动态规划经典练习题
二.分析
    用n表示当前栏杆，用（n-1）表示紧挨着n的栏杆，用sum表示总方案数,相邻栏杆出现两种情况：
    1.颜色不同；sum=dp[n-1]*(k-1)
    2.相邻相同:那么n与（n-2）的颜色不同，则sum=dp[n-2]*(k-1)
    两事件相互独立，dp[n]=dp[n-1]*(k-1)+dp[n-2]*(k-1)
三.代码书写:将板子总数用数组表示,可以让代码更简洁美观
 */
//
var numWays = function (n, k) {
  let arr = new Array(); //将板子总数用arr表示,之后返回对应的数就好
  arr[0] = 0;
  arr[1] = k;
  arr[2] = k * k;
  for (let i = 3; i < n + 1; i++) {
    arr[i] = (k - 1) * arr[i - 1] + (k - 1) * arr[i - 2];
  }
  return arr[n];
};
// 时间复杂度:O(N)  空间复杂度:O(N)
