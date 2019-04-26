// problem https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  const hash = {}

  for (let i = 0; i < numbers.length; i++) {
    const other = target - numbers[i]

    if (hash[other] !== undefined) {
      return [hash[other], i + 1]
    }

    hash[numbers[i]] = i + 1
  }
};
