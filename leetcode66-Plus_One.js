/**
 * @param {number[]} digits
 * @return {number[]}
 */
/*  
    难点：如何处理进位？
    解答：判断是否进位。
          从末尾开始遍历，给遍历的数+1,再%10，有余数说明不会进位
      
*/

var plusOne = function (digits) {
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;
    if (digits[i] != 0) return digits;
  }
  digits = [...Array(len + 1)].map((item) => {
    return 0;
  });
  digits[0] = 1;
  return digits;
};

// 时间复杂度：O(N)  空间复杂度：O(1)
