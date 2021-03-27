/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 方法：构建哈希表+map处理函数。当前数组存在，添加到哈希表，存在（使用has判断），返回结果
 *
 * 知识点：array.map 和 new Map不一样，前者是在数组引用，处理数组内容的方法；后者是构造函数，自身带有许多功能，如：has、length
 * 参考：
 *  map方法使用：https://blog.csdn.net/z93701081/article/details/82939906
 *  解法：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/solution/ha-xi-biao-shu-zu-zhong-zhong-fu-de-shu-bh7co/
 * ⭐编写：当不用返回索引时，使用for...of遍历，会让代码更整洁。
 */
var findRepeatNumber = function (nums) {
  // 知识点：使用map方法，对添加进去的所有数字就行函数处理
  let map = new Map();
  for (let i of nums) {
    if (map.has(i)) return i;
    map.set(i, 1);
  }
  return null;
};
// 时间复杂度：O(N)  空间复杂度：O(N)
