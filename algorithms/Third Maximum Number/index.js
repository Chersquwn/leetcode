// problem https://leetcode.com/problems/third-maximum-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
  const sorted = [...new Set(nums)].sort((a, b) => b - a)
  return sorted[2] !== undefined ? sorted[2] : sorted[0]
};
