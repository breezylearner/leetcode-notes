/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
/*
题意：找出第一个有错的。
破题：不是错的就是对的，错误之后永远都是错，很明显的二分法.
     二分法关键：分界点怎么找？
     本题错误版本出现一次后，剩下狗屎错误版本，且当中一顶有错误版本，说明错误版本一顶在右边。需要逐渐移动，找到第一个false
注意：
    1.返回true，是表示“该版本有错”，不是代表“该版本正确” ，找的应该是第一个false
    2.使用Math.floor，避免计算错误
*/
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 0; //最左边序列0
    let right = n + 1; // 最右边序列
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (isBadVersion(mid)) {
        //返回true，继续向右移
        right = mid;
      } else {
        left = mid + 1; //没有第0号，返回记得+1
      }
    }
    return left;
  };
}; //时间复杂度：O(N) 空间复杂度 ；O(1)
