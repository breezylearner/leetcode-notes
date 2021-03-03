/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  /*（舍弃！！后面循环太多，工作量庞大）思路：依次固定数组nums中的数，将其设置为i。再nums中的两个数为 -i，即可让最后的和为0 
  难点：难去重，可能得到组合相同但顺序不同的数组*/

  /* 方法2：先排序，让nums中的是从小到大，让结果可控，一次性解决产生重复问题。使用js中的sort函数
           排序后，以此确定num[i]，使用两个指针分别表示两端（i+1~length-1）。
           若nums[i]>0，后面两个指针肯定>0，此时三个数之和就不可能等于0，可以结束遍历。
  
      时间复杂度：O(N^2)   空间复杂度：O（1） 数组num为题材中给定，不算在解题复杂度中
  */

  let ans = [];
  let len = nums.length;
  if (nums == null || len < 3) return ans;
  nums.sort((a, b) => a - b); //使用sort排序
  let sum = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue; //去重
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      sum = nums[i] + nums[L] + nums[R];
      if (sum == 0) {
        ans.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] == nums[L + 1]) L++; //去重
        while (L < R && nums[R] == nums[R - 1]) R--; //去重
        L++;
        R--;
      } else if (sum < 0) L++;
      else R--;
    }
  }
  return ans;
};
