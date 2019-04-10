// problem https://leetcode.com/problems/merge-two-sorted-lists/

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
const mergeTwoLists = function (l1, l2) {
  let head = new ListNode(0)
  let l = head

  while (l1 || l2) {
    if (!l2 || l1 && (l1.val < l2.val)) {
      l.next = l1
      l1 = l1.next
    } else {
      l.next = l2
      l2 = l2.next
    }
    l = l.next
  }

  return head.next
};
