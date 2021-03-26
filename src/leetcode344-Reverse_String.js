/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
/**
 * 思路：从生成的数组入手，观察生成后的数组特点为s[N - 1] s[N - 2] ... s[0]，
 * 解法：双指针，每次交换后指针变换
 */
var reverseString = function (s) {
  const n = s.length;
  for (let left = 0, right = n - 1; left < right; ++left, --right) {
    // 交换写法：用两个数组，进行相等交换
    [s[left], s[right]] = [s[right], s[left]];
  }
};
// 时间复杂度：O(N) 空间复杂度：O(1)
