// problem https://leetcode.com/problems/invert-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
  if (!root) return root

  const queue = [root]

  while (queue.length > 0) {
    let node = queue.shift()

    if (!node) continue

    [node.left, node.right] = [node.right, node.left]

    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }

  return root
};
