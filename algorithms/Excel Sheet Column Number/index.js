// problem https://leetcode.com/problems/excel-sheet-column-number/

/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = function (s) {
  let num = 0

  for (let i = s.length - 1; i >= 0; i--) {
    num += (s[i].charCodeAt() - 64) * Math.pow(26, s.length - 1 - i)
  }

  return num
};
