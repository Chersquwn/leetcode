// problem https://leetcode.com/problems/word-pattern/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPattern = function(pattern, str) {
  const strs = str.split(' ')

  if (pattern.length !== strs.length) return false

  const hash1 = {}
  const hash2 = {}

  for (let i = 0; i < strs.length; i++) {
    if (hash1[pattern[i]] && hash1[pattern[i]] !== hash2[strs[i]]) return false
    if (hash2[strs[i]] && hash2[strs[i]] !== hash1[pattern[i]]) return false

    hash1[pattern[i]] = strs[i]
    hash2[strs[i]] = pattern[i]
  }

  return true
};
