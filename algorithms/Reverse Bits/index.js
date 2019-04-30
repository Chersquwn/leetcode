// problem https://leetcode.com/problems/reverse-bits/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function (n) {
  return parseInt(Array(32 - n.toString(2).length).fill('0').concat(n.toString(2).split('')).reverse().join(''), 2)
};
