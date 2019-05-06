// problem https://leetcode.com/problems/palindrome-linked-list/

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
const isPalindrome = function (head) {
  let stack = []

  while (head) {
    stack.push(head.val)
    head = head.next
  }

  for (let i = 0; i < Math.floor(stack.length / 2); i++) {
    if (stack[i] !== stack[stack.length - i]) return false
  }

  return true
};
