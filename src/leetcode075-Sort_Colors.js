/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/* 
本质还是排序，如何在不适用sort的情况下对数组进行排序
解题思路：收集所有的数字并记录下标，在根据大小排列
    （1）设置colors，记录每个数字出现的次数
    （2）遍历原数组nums并记录
    （3）设置替换的下标j
    （4）遍历colors，取出里面的数
    （5）使用下标交换，重新进行排序
参考：https://leetcode-cn.com/problems/sort-colors/solution/javascript-3-chong-jie-fa-xiang-jin-zhu-shi-by-jsl/
*/
var sortColors = function (nums) {
  const colors = [0, 0, 0];
  for (let i = 0; i < nums.length; i++) {
    colors[nums[i]]++;
  }
  let j = 0;
  for (let i = 0; i < colors.length; i++) {
    // 处理收集的数
    while (colors[i]) {
      nums[j] = i; // 替换
      j++; // 下标累加
      colors[i]--; // 次数减一
    }
  }
  return nums;
};
// 时间复杂度：O(N)  空间复杂度：O(N)
