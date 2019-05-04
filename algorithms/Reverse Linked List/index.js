// problem https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  let node = null

  while (head) {
    let temp = new ListNode(head.val)
    temp.next = node
    node = temp
    head = head.next
  }

  return node
};
