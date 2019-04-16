// problem https://leetcode.com/problems/add-binary/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  if (a.length > b.length) {
    [a, b] = [b, a]
  }

  const x = Array(b.length - a.length).fill(0).concat(a.split(''))
  const y = b.split('')
  const z = []
  let carry = 0
  let n = x.length - 1

  while (n >= 0) {
    let sum = Number(x[n]) + Number(y[n]) + carry

    if (sum > 1) {
      z.unshift(sum - 2)
      carry = 1
    } else {
      z.unshift(sum)
      carry = 0
    }

    n--
  }

  if (carry === 1) z.unshift(1)

  return z.join('')
};
