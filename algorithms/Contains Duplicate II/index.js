// problem https://leetcode.com/problems/contains-duplicate-ii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
  const hash = {}

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] !== undefined && i - hash[nums[i]] <= k) return true

    hash[nums[i]] = i
  }

  return false
};
