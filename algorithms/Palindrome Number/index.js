// problem https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0) return false
  if (x < 10) return true

  const z = []
  let y = x

  while (y) {
    z.push(y % 10)
    y = parseInt(y / 10)
  }

  for (let i = 0; i <= Math.floor(z.length / 2); i++) {
    if (z[i] !== z[z.length - i - 1]) return false
  }

  return true
};
