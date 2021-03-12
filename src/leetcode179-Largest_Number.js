/**
 * @param {number[]} nums
 * @return {string}
 */
/*
    解题：将数字两两组合，使用sort函数进行降序排列,使用join,把数组中的所有元素放入一个字符串
    技巧：用反引号拼接内容，$绑定变量，省掉重复的加号
 */
var largestNumber = function (nums) {
  nums = nums.sort((a, b) => {
    let S1 = `${a}${b}`;
    let S2 = `${b}${a}`;
    return S2 - S1;
  });
  // 考虑nums为0的情况
  return nums[0] ? nums.join("") : "0";
};
// 时间复杂度：O(N * log(N)).  空间复杂度：O(1)
