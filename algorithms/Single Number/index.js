// problem https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  return nums.reduce((a, b) => a ^= b)
};
