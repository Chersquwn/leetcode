// problem https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let len = nums.length

  for (let i = 0; i < len; i++) {
    if (nums[i] !== val) nums.push(nums[i])
  }

  return nums.length - nums.splice(0, len).length
};
