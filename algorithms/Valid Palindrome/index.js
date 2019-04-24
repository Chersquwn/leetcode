// problem https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  if (!s) return true
  const str = s.replace(/\W/g, '').toLowerCase()

  for (let i = 0, mid = Math.floor(str.length / 2); i < mid; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false
  }

  return true
};
