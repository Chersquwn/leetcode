// problem https://leetcode.com/problems/delete-node-in-a-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 *
 * 这是一道“垃圾”题目
 */
const deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
};
