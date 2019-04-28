// problem https://leetcode.com/problems/factorial-trailing-zeroes/

/**
 * @param {number} n
 * @return {number}
 *
 * 算法：
 * 1、5! = 120，count = 1
 * 2、120 * 5 = 600，即 5! * 5 = 600，5! * 5 * 5 = 3000，...
 * 3、由此可知，出现尾 0 的个数与出现 5 的倍数的个数有关
 */
const trailingZeroes = function (n) {
  let count = 0
  let i = 5

  while (i <= n) {
    count = Math.floor(n / i)
    i *= 5
  }

  return count
};
