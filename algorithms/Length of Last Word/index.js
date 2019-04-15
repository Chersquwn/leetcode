// problem https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  const arr = s.split(' ').filter(w => w !== '')

  return arr.length > 0 ? arr[arr.length - 1].length : 0
};
