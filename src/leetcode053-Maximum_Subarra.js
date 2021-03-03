/**
 * @param {number[]} nums
 * @return {number}
 */

/*
    遍历求解：
        设置为sum保存当前累加结果，设置anser，保存当前累加最大值
        当遇到大于0的数时，可扩大整体，那么sum加上并保留；当遇到负数，会减小总和，就停止累加，与当前的answer进行比较。
    注意：js中， for of 遍历的是value，for in便历出来的是属性 
 */
var maxSubArray = function (nums) {
  let sum = 0;
  let answer = nums[0];
  for (const num of nums) {
    if (sum > 0) {
      sum += num;
    } else {
      sum = num;
    }
    answer = Math.max(answer, sum);
  }
  return answer;
};
