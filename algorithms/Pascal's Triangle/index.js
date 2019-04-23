// problem https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  if (numRows === 0) return []
  if (numRows === 1) return [[1]]

  let count = 2
  let triangle = [[1], [1, 1]]

  while (count < numRows) {
    const prev = triangle[count - 1]

    triangle[count] = [1]

    for (let i = 0, len = prev.length; i < len - 1; i++) {
      triangle[count].push(prev[i] + prev[i + 1])
    }

    triangle[count].push(1)

    count++
  }

  return triangle
};
