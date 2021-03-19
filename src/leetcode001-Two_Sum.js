// 两数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  枚举循环

// 注意点：本题中，同一个元素不能使用两遍，就意味着不用考虑重复的情况，这一点让题目变得简单
var twoSum = function (nums, target) {
  // 1.循环法：两重循环，固定nums中的每个数，与其他数进行加和，等于target就输出
  // 2.利用map解题：has() 返回一个bool值，用来表明map 中是否存在指定元素.
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    //通过target减去数组num中的数得到其中一个加数res,
    const res = target - nums[i];
    // 使用has方式，筛选符合标准的元素
    if (map.has(res)) {
      return [map.get(res), i];
    } else {
      // 使用set，将数字当进去。如果有多个，就要用push
      map.set(nums[i], i);
    }
  }
};
// 时间复杂度：O(N)  空间复杂度：O(N)
