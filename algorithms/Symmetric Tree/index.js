// problem https://leetcode.com/problems/symmetric-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(root) {
  if (!root) return true

  return isMirror(root.left, root.right)
};

// BFS
function isMirror(p, q) {
  const m = [p]
  const n = [q]

  while (m.length > 0 || n.length > 0) {
    let m1 = m.shift()
    let n1 = n.shift()

    if (!m1 && !n1) continue

    if (!m1 || !n1 || m1.val !== n1.val) return false

    m.push(m1.left)
    m.push(m1.right)
    n.push(n1.right)
    n.push(n1.left)
  }

  return true
}

// DFS
function isMirror(p, q) {
  if (!p && !q) return true
  if (!p || !q || p.val !== q.val) return false

  return isMirror(p.left, q.right) && isMirror(p.right, q.left)
}
