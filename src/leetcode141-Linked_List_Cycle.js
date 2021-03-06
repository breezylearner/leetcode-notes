/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
/*
设置两个指针,慢的为head,快的为head.next
解决:判圈算法中,两指针同起点,此处则是一前一后
知识点:
    1.Floyd 判圈算法.类似追及问题,若甲乙之间存在速度差,当跑步路线成环状时,二者一定会相遇(不限制时间),且相遇时,相差路程一定是环长的倍数.一般将慢的是速度设置为1(节点.next),快速度设置为2(节点.next.next)
    2.一旦进入环形链表,节点指针就不会为空(作图理解))
 */
var hasCycle = function (head) {
  // 先排除极端情况:head不存在,或者只有head
  if (!head || !head.next) {
    return false;
  }
  let slow = head;
  let fast = head.next;
  while (fast !== null && fast.next) {
    //要对fast.next进行判断,若非环形链表.当fast作为最后一个节点时,指向的是null,会报错!
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
}; //时间复杂度:O(N)  空间复杂度:O(1)
