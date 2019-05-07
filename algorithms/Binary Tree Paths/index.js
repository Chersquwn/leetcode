// problem https://leetcode.com/problems/binary-tree-paths/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function (root) {
  const paths = []

  root && treePath(root, '' + root.val, paths)

  return paths
};

function treePath(node, path, paths) {
  if (!node.left && !node.right) return paths.push(path)
  if (node.left) treePath(node.left, path + '->' + node.left.val, paths)
  if (node.right) treePath(node.right, path + '->' + node.right.val, paths)
}
