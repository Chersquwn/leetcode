// problem https://leetcode.com/problems/linked-list-cycle/

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
 *
 * 算法：快慢双指针
 * 1、快指针一次移动两步，慢指针一次移动一步
 * 2、如果存在环路，则快指针必定能追上慢指针
 */
const hasCycle = function (head) {
  let fast = head
  let slow = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (fast === slow) return true
  }

  return false
};
