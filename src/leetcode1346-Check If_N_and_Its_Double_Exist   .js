/**
 * @param {number[]} arr
 * @return {boolean}
 */
/*
⭐不要小瞧简单题，要通过简单题，训练自己用编程语言表达思路的能力！

暴力法问题：两层for循环，时间复杂度会高
改进：使用set函数处存数组，has函数判断是否存在，降低两重循环损耗的时间
 */
var checkIfExist = function (arr) {
  const set = new Set();
  for (const val of arr) {
    if (set.has(val << 1) || set.has(val / 2)) return true;
    set.add(val);
  }
  return false;
};
// 时间复杂度：O(N) 空间复杂度：O(N)
