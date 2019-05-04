// problem https://leetcode.com/problems/count-primes/

/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
  if (n <= 2) return 0

  let primes = Array(n).fill(true)
  let count = 1

  for (let i = 3; i < n; i += 2) {
    if (primes[i] === false) continue

    count++

    for (let j = 3; i * j < n; j += 2) {
      primes[i * j] = false
    }
  }

  return count
}
