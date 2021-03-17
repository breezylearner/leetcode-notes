/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
/**
 * 初次思路：转成数组进行判定。对数组使用双指针，利用回文数的对称，判断该链表是否为回文链表
 * 降低空间复杂度：快慢指针，通过反转链表判断
 */
var isPalindrome = function (head) {
  // ⭐（该过程要能立刻写出！）链表变数组：push将值推入数组，每执行一次，移动链表指针，直到终点
  const arr = [];
  while (head != null) {
    arr.push(head.val);
    head = head.next;
  }
  // 双指针判断
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] != arr[right]) return false;
    else {
      left++, right--;
    }
  }
  return true;
}; //时间复杂度：O(N)  空间复杂度：O(N)
