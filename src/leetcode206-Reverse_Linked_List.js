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

/*关键：理解链表。
        链表：每个节点有信息域和指针（.next），信息域中存有变量，指针指向下一个变量。指向null的变量为链表终点
    反转链表的题眼，就是考察如何改变链表的结构
*/
var reverseList = function (head) {
  let [prev, curr] = [null, head];
  //  使用while进行迭代：链表末尾指向null，当进行到null时，while自动退出
  while (curr) {
    let tmp = curr.next; // 1. 临时存储当前指针后续内容  此时的curr.next就是2，只是装在了变量tmp中
    curr.next = prev; // 2. 反转链表。此时的curr.next是“针”，等号相当于指向的内容。现在让curr（head）指向了空值
    prev = curr; // 3. 接收反转结果。此时prev里面装的是head
    curr = tmp; // 4. 接回临时存储的后续内容。让原先的2作为现在的表头
  }
  return prev; //此时，head为prev，curr为null，完成反转
};

// 时间复杂度：O(N) 空间复杂度：O(1)
