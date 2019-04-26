// problem https://leetcode.com/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 *
 * 算法：
 * 1、双指针 a、b 分别从 headA、headB 开始遍历
 * 2、当 a 指针遍历到 headA 结尾时，将该指针指向 headB，开始遍历；当 b 指针遍历到 headB 结尾时，将该指针指向 headA，开始遍历；
 * 3、当指针 a 与 指针 b 相遇（相等），则指针 a 和 指针 b 所指向的节点为交叉节点
 */
const getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null

  let a = headA
  let b = headB

  while (a && b && a !== b) {
    a = a.next
    b = b.next

    if (a === b) return a

    !a && (a = headB)
    !b && (b = headA)
  }

  return a
};
