/**
 * @param {number[]} nums
 * @return {number}
 */
/* 
思路；利用异或运算特性“遇0为0，不同为自身”。且题中答案唯一，不闭考虑去重
*/
var singleNumber = function (nums) {
  let ans = 0;
  for (const num of nums) {
    ans ^= num;
  }
  return ans;
};
// 时间复杂度：O(n)，空间复杂度：O(1)
