// problem https://leetcode.com/problems/longest-palindrome/

/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  const hash = {}
  let count = 0

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) {
      hash[s[i]] = 0
      count += 2
    } else {
      hash[s[i]] = 1
    }
  }

  if (count < s.length) {
    count += 1
  }

  return count
};
