// problem https://leetcode.com/problems/count-and-say/

/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
  if (n === 1) return '1'

  let s = [1]

  while (n > 1) {
    s = recursion(s)
    n--
  }

  return s.join('')
};

function recursion(arr) {
  const s = []

  for (let i = 0, j = 1; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      j++
    } else {
      s.push(j, arr[i])
      j = 1
    }
  }

  return s
}
