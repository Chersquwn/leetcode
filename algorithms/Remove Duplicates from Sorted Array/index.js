// problem https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let len = nums.length

  for (let i = 0; i < len; i++) {
    if (nums[i] !== nums[i + 1]) nums.push(nums[i])
  }

  return nums.length - nums.splice(0, len).length
};
