// problem https://leetcode.com/problems/isomorphic-strings/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false

  const hashs = {}
  const hasht = {}

  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) hashs[s[i]] = t[i]

    if (!hash[t[i]]) hasht[t[i]] = s[i]

    if (hashs[s[i]] !== t[i] || hasht[t[i]] !== s[i]) return false
  }

  return true
};
