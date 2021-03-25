/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * 1.广度优先搜索：横着一层一层遍历，有下一节，深度就加一
 * 知识点：arrayObject.shift()，用于把数组的第一个元素从其中删除，并返回第一个元素的值
 * 参考：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/liang-chong-jie-fa-di-gui-dfs-bfs-by-hyj8/
 */
var maxDepth = function (root) {
  if (root == null) return 0;
  const queue = [root];
  let depth = 1; //初始深度绝不可以设置为0！根节点的存在，让深度最少为1
  while (queue.length) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const cur = queue.shift();
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    // ⭐当前层所有节点已经出列，如果队列不为空，说明有下一层节点，depth+1
    if (queue.length) depth++;
  }
  return depth;
}; //时间复杂度：O(N)  空间复杂度：O(N)  此方法空间的消耗取决于队列存储的元素数量

//2.深度优先：纵向比较。使用递归，接用max比较最大值
var maxDepth1 = function (root) {
  if (!root) {
    return 0;
  } else {
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return Math.max(left, right) + 1;
  }
};
