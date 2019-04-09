// problem https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const map = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  }
  let int = 0

  for (let i = 0; i < s.length; i++) {
    int += map[s[i + 1]] > map[s[i]] ? -map[s[i]] : map[s[i]]
  }

  return int
};
