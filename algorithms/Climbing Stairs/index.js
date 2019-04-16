// problem https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  if (n === 1) return 1

  let a = 1
  let b = 2

  for (let i = 0; i < n; i++) {
    let c = a + b
    a = b
    b = c
  }

  return b
};
