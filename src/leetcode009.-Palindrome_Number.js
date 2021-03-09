/*
解题：回文数，轴对称数字，从中间开始对称，使用二分法进行判断
知识点：使用toString，数字转化成字符串，拆分整数
 */
var isPalindrome = function (x) {
  if (x < 0) return false; //任何负数均不是回文数
  let answer = true;
  x = x.toString();
  for (let i = 0, len = x.length; i < len / 2; i++) {
    if (x[i] !== x[len - 1 - i]) {
      answer = false;
      break;
    }
  }
  return answer;
};
// 时间复杂度：O(N)   空间复杂度：O(1)
