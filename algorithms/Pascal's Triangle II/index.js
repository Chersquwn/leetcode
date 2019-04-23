// problem https://leetcode.com/problems/pascals-triangle-ii/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
  if (rowIndex === 0) return [1]

  const row = [1, 1]
  let count = 1

  while (count++ < rowIndex) {
    const prev = row.splice(0)

    row.push(1)

    for (let i = 0; i < prev.length - 1; i++) {
      row.push(prev[i] + prev[i + 1])
    }

    row.push(1)
  }

  return row
};
