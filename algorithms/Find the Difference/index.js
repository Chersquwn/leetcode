// problem https://leetcode.com/problems/find-the-difference/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
  const hash = {}

  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = hash[s[i]] ? hash[s[i]] + 1 : 1
  }

  for (let i = 0; i < t.length; i++) {
    if (!hash[t[i]]) return t[i]
    hash[t[i]]--
  }
};
