/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 双指针遍历：一个指针用来读取，一个指针用来记录。
 * ⭐本体练习快速编写while语句
 */
var removeDuplicates = function (nums) {
  //p1向前走，p2判断是否要记录
  let p1 = 0,
    p2 = 0;
  while (p1 < nums.length) {
    if (nums[p2] != nums[p1]) {
      p2++;
      nums[p2] = nums[p1];
    }
    p1++;
  }
  return p2 + 1; //补上开始的0位
};
// 时间复杂度：O(N) 空间复杂度：O(1)
