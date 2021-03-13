/**
 * @param {string} s
 * @return {number}
 */
/**
 解题点：利用回文串的数量特性求解。
        只要元素是成对出现，就能构成回文数。因此，将字符串中拆分为数组。若从原数组中取到的元素在存放的数组（set）中能凑成一对，回文数加2。若凑不成，说明只能放在回文串中间做对称轴，此时总数+1，
 知识点：
    1.在 Set 中添加元素,会自动过滤掉重复元素
    2.js的forEach函数：对数组中的每个元素进行函数调用，可对数组内每个元素进行处理
    3.split(""):切割每一个字符串的字符,字符串变成数组
    4.has函数:筛选指定内容
参考：打牌解题https://leetcode-cn.com/problems/longest-palindrome/solution/yong-da-pai-de-si-lu-lai-ji-suan-zui-chang-hui-wen/
 */
var longestPalindrome = function (s) {
  let temp = new Set(); //放置不成对出现的函数
  let sum = 0;
  // 先放在set中，遇见重复的回文数+2，并删除temp数组中存放的数
  s.split("").forEach((c) => {
    if (temp.has(c)) {
      temp.delete(c);
      sum = sum + 2;
    } else {
      temp.add(c);
    }
  });
  return sum + (temp.size > 0 ? 1 : 0); //未成对的数作为“对称轴”，不管多少总数都只加1
};
// 时间复杂度：0(N)  空间复杂度：O(N)
