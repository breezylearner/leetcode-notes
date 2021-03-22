/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * ⭐ 本体为"最长上升子序列"经典题,标准解法为动态规划
 * 知识点:Array.from(拷贝对象,每个数执行操作),动态保存被拷贝的数组
 */
var lengthOfLIS = function (nums) {
  // 设置数组长度
  const length = nums.length;
  //设置常量dp存储length,并初始化里面的内容,长度与nums保持一致
  const dp = Array.from(Array(length), () => 1);
  let result = 1; //初始化存储结果的变量.
  // 遍历比对值,
  //   for (let i = length - 1; i > -1; i--) { //设置指针i,倒着遍历数组
  for (let i = 0; i < nums.length - 1; i++) {
    //设置指针i,倒着遍历数组
    // 4.1 将当前值和后面的值比对
    for (let j = i + 1; j < length; j++) {
      // j为i后面的数,当后面大于前面,说明是升序排列.个呢更新dp数组
      if (nums[j] > nums[i]) {
        // ⭐数组dp里面全是1,如果j>
        dp[i] = Math.max(dp[j] + 1, dp[i]); //dp[j]一顶要
        // 4.4 如有必要更新最大值
        if (dp[i] > result) {
          result = dp[i];
        }
      }
    }
  }
  return result;
};
