/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 二分法搜索模板：对于有序数组（升序或者降序），将需要查找的内容设置为mid，通过不断缩小搜索范围，得到目标数。
二分优点：空间复杂度小，不需要过多的变量就能完成搜索
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1; //
  while (left <= right) {
    //当已经“没有”中间值的时候，跳出循环
    // 单纯二分中，mid只要保证是个整数，就能不断缩小范围，因此ceil、floor和round都能用
    const mid = Math.ceil(left + (right - left) / 2);
    // 根据目标不同，变换搜索范围
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // 不要手滑将return写在while里！！while执行完条件会自动退出！
  return -1;
};
// 时间复杂度： O(logn) 空间复杂度：O(1)
