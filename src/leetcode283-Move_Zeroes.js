/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * ⭐双指针交换：
 *  1.开始，两个指针同时前进
 *  2.当遇到0的时候，指针i向前，指针j留在原处，依旧指向0，当遇到i指向非0时，i,j交换
 *  直到数组遍历完为止
 *
 *  注意：不要直接从后面遍历，因为最后一位可能就是0
 */
var moveZeroes = function (nums) {
  let i = 0,
    j = 0;
  while (i < nums.length) {
    if (nums[i] != 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j++;
    } else {
      i++;
    }
  }
};
// 时间复杂度：O(N) 空间复杂度：O(1)
