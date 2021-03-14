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
 * @return {number[]}
 */
/**
要点：
    中序遍历与其他两点最大的不同，在于在处理当前节点，放在了访问完它的左子树之后，若此时打印节点，就会产生“左根右”。
 参考：深入理解中序遍历https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/shou-hua-tu-jie-yong-zhan-mo-ni-zhong-xu-bian-li-z/
 */
var inorderTraversal = function (root) {
  const res = [];
  const inorder = (root) => {
    if (!root) {
      return;
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  };
  inorder(root);
  return res;
};
// 时间复杂度：O(N)  空间复杂度O(N)
