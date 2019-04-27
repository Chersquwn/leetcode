// problem https://leetcode.com/problems/excel-sheet-column-title/

/**
 * @param {number} n
 * @return {string}
 */
const convertToTitle = function (n) {
  let title = ''

  while (n) {
    let mod = n % 26 || 26

    n = Math.floor((n - mod) / 26)
    title = String.fromCharCode(mod + 64) + title
  }

  return title
};
