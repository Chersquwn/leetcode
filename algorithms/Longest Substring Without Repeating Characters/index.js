// problem https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const hash = {}
  let l = 0

  for (let i = 0, j = 0; i < s.length; i++) {
    const char = s[i]

    if (hash[char] !== undefined) {
      j = Math.max(hash[char] + 1, j)
    }

    hash[char] = i

    l = Math.max(i - j + 1, l)
  }

  return l
}
