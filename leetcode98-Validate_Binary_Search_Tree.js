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
/* 、
一.核心问题：
    二叉搜索树的特征，能转化成什么数学条件？
二.破题关键：
1.利用中遍历“左→右”的求解顺序，当左边与右边为递增关系时，左边一定小于右边。
2.利用morris算法进行遍历，记录上个节点值，若当前节点值<=上个节点值，返回false（保证数据是递增的）
三.知识点：
记作当前节点为cur。
    1.如果cur无左孩子，cur向右移动（cur=cur.right）
    2.如果cur有左孩子，找到cur左子树上最右的节点，记为mostright
        （1）如果mostright的right指针指向空，让其指向cur，cur向左移动（cur=cur.left）
        （2）如果mostright的right指针指向cur，让其指向空，cur向右移动（cur=cur.right）
四.编写注意：
    1.命名变量时，用L的大写不要用小写！数组1和字母l长得太像了！
    2.因为递增，左边应该是最小，使用负无穷初始化左节点，防止遇到的左节点比初始化还要小
*/
var isValidBST = function (root, L = -Infinity) {
  while (root)
    if (root.left) {
      var p = root.left;
      while (p.right && p.right !== root) {
        p = p.right;
      }
      if (p.right === null) {
        (p.right = root), (root = root.left);
      } else {
        if (root.val <= L) return false;
        (L = root.val), (root = root.right), (p.right = null);
      }
    } else {
      if (root.val <= L) return false;
      (L = root.val), (root = root.right);
    }
  return true;
};
// 时间按复杂度：O(N)  空间复杂度：O(1)
