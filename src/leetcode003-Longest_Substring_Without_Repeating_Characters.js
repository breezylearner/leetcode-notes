/*
解法：滑动窗口
    创建一个数组，遍历给出的数组s，使用indexOf判断是否之前出现过。
    没出现过，使用push推入；出现过，截取当前出现的数组。
    使用charAt，返回当前判断的数，最为下一组的第一位
    重复上面做法，得到下一段，使用Math.max进行比较
注意：
    1.splice截取的区间左闭右开，最右边的数是得不到的。
    2.数组末尾计算为负数。例：-1代表数组最后一位
 */
var lengthOfLongestSubstring = function (s) {
  let arr = []; //存放不重复内容的数组
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i]); //设置每个数暂存的变量let
    if (index !== -1) {
      arr.splice(0, index + 1);
    }
    arr.push(s.charAt(i));
    max = Math.max(arr.length, max); //保留最大长度数组
  }
  // 返回
  return max;
};
// 时间复杂度：O(N^2) 空间复杂度:O(N)
