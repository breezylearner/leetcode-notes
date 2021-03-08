// 直接解，用indexOf进行判断。简单，但是时间复杂度高
var Mysearch = function (nums, target) {
  return nums.indexOf(target);
};
// 解法1
var search2 = function (nums, target) {
  if (!nums || nums.length === 0) return -1;
  let start = 0;
  let end = nums.length - 1;
  // 跳出循环两点：（1）数组中没有→返回-1 （2）找到目标数
  while (start <= end) {
    let mid = (start + end) >> 1;
    if (nums[start] === target) return start; //target在两端
    if (nums[end] === target) return end;
    if (nums[mid] === target) return mid; //target在中间
    // 说明前半部分有序
    if (nums[start] < nums[mid]) {
      if (nums[start] < target && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[mid] < target && target < nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};
