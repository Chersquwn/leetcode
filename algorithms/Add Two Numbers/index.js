// problem https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0)
  let node = head
  let carry = 0

  while (l1 || l2) {
    let x = l1 ? l1.val : 0
    let y = l2 ? l2.val : 0
    let sum = x + y + carry

    carry = sum > 9 ? 1 : 0

    node.next = new ListNode(sum % 10)
    node = node.next

    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
  }

  if (carry > 0) {
    node.next = new ListNode(carry)
  }

  return head.next
};
