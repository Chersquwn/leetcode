// problem https://leetcode.com/problems/power-of-two/

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
  return Math.log2(n) % 1 === 0
};
