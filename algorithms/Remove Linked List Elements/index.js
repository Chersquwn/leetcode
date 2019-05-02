// problem https://leetcode.com/problems/remove-linked-list-elements/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
  while (head && head.val === val) {
    head = head.next
  }

  if (!head) return null

  let node = head

  while (node) {
    if (node.next && node.next.val === val) {
      node.next = node.next.next
    } else {
      node = node.next
    }
  }

  return head
};
