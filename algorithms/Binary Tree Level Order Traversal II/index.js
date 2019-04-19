// problem https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = function (root) {
  const result = []

  levelOrder(root, 0, result)

  return result.reverse()
};

function levelOrder(root, level, result) {
  if (!root) return

  result[level] = result[level] || []
  result[level].push(root.val)

  level++
  levelOrder(root.left, level, result)
  levelOrder(root.right, level, result)
}
