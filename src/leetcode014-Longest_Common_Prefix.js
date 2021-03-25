/**
 * @param {string[]} strs
 * @return {string}
 */
/**
 * 1.纵向比较：
 *  (1)据公共前缀“所有开头都一样”的特性，从第一个字母开始遍历，如果有一样的，就更新答案
 *  (2).如果有任何一个为空，则不存在公共前缀
 *2.知识点：substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符
 *  ⭐本题可用来练习“编写双重循环”
 * 参考：https://leetcode-cn.com/problems/longest-common-prefix/solution/hua-jie-suan-fa-14-zui-chang-gong-gong-qian-zhui-b/
 */
var longestCommonPrefix = function (strs) {
  // 字符串长度不存在，直接返回空字符
  if (strs.length == 0) return "";
  let res = strs[0]; //初始化res，先假定答案为第一个字符串
  for (let i = 1; i < strs.length; i++) {
    //遍历整个字符串
    let j = 0;
    for (j = 0; j < res.length && j < strs[i].length; j++) {
      // 只要遍历的内容不一样，就立刻退出！
      if (res[j] != strs[i][j]) break;
    }
    res = res.substr(0, j); //使用substr，抽取j保存的下标
    // 不存在公共前缀
    if (res === "") return res;
  }
  return res;
};
// 时间复杂度：O(mn)  空间复杂度：O(1)
