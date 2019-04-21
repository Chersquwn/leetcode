// problem https://leetcode.com/problems/minimum-depth-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = function (root) {
  if (!root) return 0

  const queue = [root]
  let depth = 1

  while (queue.length) {
    for (let i = 0, len = queue.length; i < len; i++) {
      let node = queue.shift()

      if (!node.left && !node.right) return depth

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    depth++
  }

  return depth
};
