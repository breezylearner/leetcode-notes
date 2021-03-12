/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
/*
解题思路：若两者能相交，A,B遍历完自己的，再去遍历从头遍历对方的，到最后两者经历经历过的长度是相同的
 */
var getIntersectionNode = function (headA, headB) {
  let h1 = headA;
  let h2 = headB;
  // a,b链表有相交的话，就到不了终点
  // a,b链表没有相交，都走到终点null, null === null,此时跳出循环。
  while (h1 !== h2) {
    h1 = h1 === null ? headB : h1.next; // h1是否在最后？不在
    h2 = h2 === null ? headA : h2.next; // h2结束 接入对方
  }
  return h1;
};
// 时间复杂度：O(M+N)  空间复杂度：O(1)O
