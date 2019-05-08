// problem https://leetcode.com/problems/add-digits/

/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function (num) {
  while (num.length > 9) {
    num = num.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b))
  }

  return num
};
