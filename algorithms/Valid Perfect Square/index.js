// problem https://leetcode.com/problems/valid-perfect-square/

/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function(num) {
  if (num === 1) return true

  let left = 0
  let right = Math.floor(num / 2)

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let result = mid * mid

    if (result === num) return true

    if (result < num) left = mid + 1
    if (result > num) right = mid - 1
  }

  return false
};
