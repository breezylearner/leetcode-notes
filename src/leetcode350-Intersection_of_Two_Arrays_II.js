/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/**
 * 解题：
 *  1.使用sort排序，将num1,num2处理为升序数组，将重复的数据放在一起，统一处理
 *  2.使用双指针，将扫描到相同数字存放到res数组
 */
var intersect = function (nums1, nums2) {
  // 排序数组
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  const res = [];
  let p1 = 0; // p1扫描nums1
  let p2 = 0; // p2扫描nums2
  //   超出其中一个数组，都不会产生交集
  // 三种情况：p1比p2大，p2比p1大，p1==p2。不相等时，小的指针前进，当两者相等时，存入res数组
  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] > nums2[p2]) {
      p2++;
    } else if (nums1[p1] < nums2[p2]) {
      p1++;
    } else {
      res.push(nums1[p1]);
      p1++;
      p2++;
    }
  }
  return res;
};
//时间复杂度：O(mlogm+nlogn)  空间复杂度：O(min(m,n))
//本体的时间复杂度和空间复杂度不好算，参考官方题解
