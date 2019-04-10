// problem https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i])
    } else {
      if (map[stack.pop()] !== s[i]) return false
    }
  }

  if (stack.length > 0) return false

  return true
};
