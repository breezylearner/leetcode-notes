/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * ⭐本题的需要之后再写两三遍，回溯的过程有点绕
 * 解题：经典回溯题——先前进，遇到问题要撤销当前的选择，回到选择前的状态
 * 知识点：
 *  1.slice函数中不添加任何内容，会拷贝整个数组
 *  2.pop函数：array.pop(),取出array最后一个数，并在array中删除
 *  3.if (used[num]) 判断数组内存在的简洁写法，该方法节省时间
 * 参考|回溯相关练习：https://leetcode-cn.com/problems/permutations/solution/javascript-hui-su-xiang-jin-zhu-shi-by-jsliang-4/
 */
var permute = function (nums) {
  const res = [];
  const used = []; //记录数是否被使用过，避免重复
  dfs([]);
  return res;
  //  深度优先搜索函数作用：基于当前的 path，继续选数，直到构建出合法的path，加入解集
  function dfs(path) {
    if (path.length == nums.length) {
      // 当达到数组要求个数时，算作一种可能，存放在结果res中
      //  ⭐ path在循环里面还要继续承载变量，不能作为承载结果的数组，要使用slice截取满足条件的数组
      res.push(path.slice());
      return;
    }
    // 依次去除里面的数，遇到重复的
    for (const num of nums) {
      // for...of遍历nums中所有数，得到所有可能
      if (used[num]) continue; // 已存在这个数，跳过，去添加下一个数
      path.push(num); // 将当前数放进path中
      used[num] = true; // 记录该数使用过
      dfs(path); // 调用dfs进行递归
      path.pop(); // 回溯：上一句的递归结束，进入下一个分支，将最后选的数pop出来
      used[num] = false; // 撤销这个记录
    }
  }
}; //时间复杂度：O(n×n!)  空间复杂度：O(n)
