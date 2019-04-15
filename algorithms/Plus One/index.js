// problem https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  let n = digits.length - 1

  while (n >= 0) {
    digits[n] += 1

    if (n === 0 || digits[n] < 10) break

    digits[n] = 0
    n--
  }

  return digits.join('').split('')
};
