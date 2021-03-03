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
 * @return {boolean}
 */

/* 利用二叉树具有链表的特性：
    1.节点上有值有指针，可进行递归。
    2.指向null的节点为树的底部，可将指向null的节点，作为循环结束的标志。
    */

function isBalanced1(root, result) {
  if (root == null) {
    return 0;
  }
  let l = isBalanced1(root.left, result); //根左边的
  let r = isBalanced1(root.right, result); //root右边
  // 当左右深度差值为1，说明该树不平衡
  if (l - r > 1 || l - r < -1) {
    result[0] = false;
  }
  return Math.max(l, r) + 1; //去左右节点中大的那个，进行下一个节点判断
}

// 判断函数
var isBalanced = function (root) {
  let a = [true];
  isBalanced1(root, a);
  return a[0];
};

// 时间复杂度：O(N)  空间复杂度：O(N)
