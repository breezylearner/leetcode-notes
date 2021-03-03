/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* 
    问题：（1）怎么分别存放节点？（2）怎样拼接节点
    答案：（1）使用链表的next属性，将相同性质的节点串起来。（2）分别拼接奇偶链，最后首尾连接
    利用知识点：自然数里，奇偶交错出现，因此可以使用“奇数.next”表示偶数。
    原地算法：就地取材，不添加别的变量。
 */
var oddEvenList = function (head) {
  if (head == null) {
    return head;
  }
  let odd = head; // 扫描奇数结点
  let even = head.next; // 扫描偶数结点
  let evenHead = even; // 保存偶链的头结点

  // 循环结束标志：偶数为0 && 奇数（偶数下一位）为0
  while (even != null && even.next != null) {
    odd.next = even.next; // odd.next为偶数，放在偶数链上
    odd = odd.next; // 奇数连接奇数，通过next
    even.next = odd.next; //
    even = even.next; // 指向下一个偶数点
  }
  odd.next = evenHead; // 奇偶链相连
  return head;
};
//时间复杂度应为 O(nodes)  空间复杂度：O(1)，
