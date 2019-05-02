// problem https://leetcode.com/problems/happy-number/

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  const hash = { n: true }

  while (true) {
    n = n.toString().split('').reduce((total, a) => total + Math.pow(parseInt(a), 2), 0)

    if (n === 1) {
      return true
    } else if (hash[n]) {
      return false
    }

    hash[n] = true
  }
}
