/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

/*
    问题：如何处理每次反转的节点？
    解决：设置一个哨兵节点，组为临界判断，在递归中常连接上下。本题的哨兵是prev设
    参考哨兵节点：https://leetcode-cn.com/problems/reverse-nodes-in-k-group/solution/shua-chuan-lc-duo-tu-jiang-jie-di-gui-gu-6wr0/
    补充： 注释中的内容是可以拿来用的，是leetcode提供的元素
*/

var reverseKGroup = function (head, k) {
  var index = 0; //设置一个遍历变量。从第0位开始
  var copyHead = head; //设置变量存储head
  // 去k个数字进行以此排列
  while (copyHead !== null && index < k) {
    copyHead = copyHead.next;
    index++;
  }
  if (index < k) {
    //达不到一组的要求，直接返回
    return head;
  }
  // 反转
  var curr = head;
  var prev = null;
  var n = k;
  while (curr !== null && n-- > 0) {
    var next = curr.next;
    curr.next = prev; //拼接到之前的结尾
    prev = curr;
    curr = next;
  }
  head.next = reverseKGroup(curr, k); //下一组数作为起点，不断循环，直到不能成一组数
  return prev;
};
// 时间复杂度：O(N),空间复杂度：O(1)
