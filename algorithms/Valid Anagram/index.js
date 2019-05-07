// problem https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false

  const hash = {}
  let len = s.length

  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = !hash[s[i]] ? 1 : hash[s[i]] + 1
  }

  for (let i = 0; i < t.length; i++) {
    hash[t[i]] && hash[t[i]]-- > 0 && len--
  }

  return len === 0
};
