// problem https://leetcode.com/problems/ransom-note/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  const hash = {}

  for (let i = 0; i < magazine.length; i++) {
    const item = magazine[i];
    hash[item] = hash[item] ? hash[item] + 1 : 1
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const item = ransomNote[i]
    hash[item] = hash[item] ? hash[item] - 1 : -1
    if (hash[item] < 0) return false
  }

  return true
};
