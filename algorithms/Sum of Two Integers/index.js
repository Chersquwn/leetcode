// problem https://leetcode.com/problems/sum-of-two-integers/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = function(a, b) {
  let c = (a & b) << 1
  a ^= b

  if (c === 0) return a
  return getSum(a, c)
};
