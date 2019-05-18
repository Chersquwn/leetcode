// problem https://leetcode.com/problems/nth-digit/

/**
 * @param {number} n
 * @return {number}
 */
const findNthDigit = function (n) {
  let pow = 1
  let count = 0

  while (count < n) {
    count += pow * 9 * Math.pow(10, pow - 1)
    pow++
  }

  pow--

  let left = n - (count - pow * 9 * Math.pow(10, pow - 1))
  let num = (Math.pow(10, pow - 1) + Math.ceil(left / pow) - 1) + ''
  let pos = (left % pow) - 1

  if (pos < 0) return Number(num[num.length - 1])
  return Number(num[pos])
};
