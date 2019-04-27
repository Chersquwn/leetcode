// problem https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const hash = {}

  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = hash[nums[i]] || 0
    hash[nums[i]]++

    if (hash[nums[i]] >= nums.length / 2) return nums[i]
  }
};
