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
/**
 * 关键在于两点：1.如何处理重复的数据 2.何时返回结果
 * 答案：
 *  1.若遇到重复，调整指针，让原本指向重负内容的指针指向下一个，
 *  2.遍历完链表，.next=null，（null不用特别写出，while里面条件不存在，自然会跳出循环）
 */
var deleteDuplicates = function (head) {
  var cur = head;
  while (cur && cur.next) {
    if (cur.val == cur.next.val) {
      cur.next = cur.next.next; //去重关键：直接执行下一个
    } else {
      cur = cur.next;
    }
  }
  return head;
};
// 时间复杂度：O(N)  空间复杂度：O(1)
