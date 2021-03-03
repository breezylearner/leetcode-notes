/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  /**
   * @param {string} s
   * @return {boolean}
   */

  /* 解题关键：利用栈“先进后出”的特性存储所有左括号，利用pop函数从后逐一检查
      注意："case"的左右括号类型必须一样，否则无法配对。
      知识点：1.栈的性质 2.pop函数的作用
  */
  var isValid = function (s) {
    let arr = []; //
    let len = s.length; //以数组长度都作为变量，方便后边判断奇偶与依次循环
    if (len % 2) return false; // 减少运算量：如果数组内的数不是偶数，说明有括号未配对，可直接判定错误
    // 循环内容：对函数内的括号进行分类，并是由pop函数与之前存储的内容相配对
    for (let i = 0; i < len; i++) {
      let letter = s[i];
      switch (letter) {
        case "(": {
          arr.push(letter);
          break;
        }
        case "[": {
          arr.push(letter);
          break;
        }
        case "{": {
          arr.push(letter);
          break;
        }
        case ")": {
          if (arr.pop() !== "(") return false;
          break;
        }
        case "]": {
          if (arr.pop() !== "[") return false;
          break;
        }
        case "}": {
          if (arr.pop() !== "{") return false;
          break;
        }
      }
    }
    return !arr.length;
  };
};
// 时间复杂度：O(N)   空间复杂度：O(N) 创建了数组
