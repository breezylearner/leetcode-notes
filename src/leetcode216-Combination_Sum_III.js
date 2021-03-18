/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
/**
 * 思路：枚举所有选项，遍历数组，使用pop进行回溯
 * 参考：https://leetcode-cn.com/problems/combination-sum-iii/solution/shou-hua-tu-jie-216-zu-he-zong-he-iii-by-xiao_ben_/
 */
var combinationSum3 = function (k, n) {
  const res = [];
  // 基于当前已选的comb数组(和为sum)，在数start到数9中继续选
  const dfs = (start, comb, sum) => {
    if (comb.length == k) {
      if (sum == n) {
        res.push(comb.slice());
      }
      return;
    }
    for (let i = start; i <= 9; i++) {
      // 使用遍历，枚举所有可能
      comb.push(i);
      dfs(i + 1, comb, sum + i);
      comb.pop();
    }
  };
  dfs(1, [], 0);
  return res;
}; //时间复杂度：O(S)  空间复杂度：O(target)
