/**
 * @param {number[]} candidates  //给一段数组
 * @param {number} target  //一个目标
 * @return {number[][]}  //返回符合要求的数组
 */
/**
 * 参考：https://leetcode-cn.com/problems/combination-sum/solution/shou-hua-tu-jie-zu-he-zong-he-combination-sum-by-x/
 * 思路：小于就继续累加，等于就存储，大于就退出（之后没可能等于）
 * 难点：如何放置重复选择？——使用遍历控制下一次选择，每次的累加只能从取当前和右边取值
 * 如果不够就继续加，超出或等于执行另一种情况：等于就返回，并存入结果数组；使用slice进行足截取复制，每添加一个数，就判断是不是达到目标函数
 * 区分：splice改变原数组，slice只是复制内容并返回。两者相差一个p，但是作用不同
 * pop返回的是最后一个数，不是产出最后一个的数组
 *
 */
var combinationSum = function (candidates, target) {
  const res = []; //所有符合要求的数组
  const dfs = (start, temp, sum) => {
    // start是当前选择的起点索引 temp是当前的集合 sum是当前求和
    if (sum >= target) {
      //当temp中存的数符合标准时，使用array.push，将符合标砖的数组存入res，同时temp使用slice函数，复制整个数组。
      if (sum == target) {
        res.push(temp.slice());
      }
      return; // 跳出循环，结束当前递归
    }
    for (let i = start; i < candidates.length; i++) {
      // 枚举当前可选的数，从start开始
      temp.push(candidates[i]);
      //   每添加以此就进行依次判断，若符合标准，放入解集，不符合标准，删除最后一个
      dfs(i, temp, sum + candidates[i]); // ⭐每次传i，而不是i+1,就能重复选择
      temp.pop(); //sum进行加法运算，不断清除temp中的元素
      // 撤销选择，回到选择candidates[i]之前的状态，继续尝试选同层右边的数
    }
  };
  dfs(0, [], 0); //从0开始遍历，temp为空数组，sum为0
  return res;
}; //时间复杂度：O(S)  空间复杂度：O(target)
