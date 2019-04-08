// problem https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const y = Number(Math.abs(x).toString().split('').reverse().join(''))

  if (y.toString(2).length > 31) return 0

  return x > 0 ? y : -y
};
