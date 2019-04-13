// problem https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length

  if (target <= nums[0]) return 0
  if (target > nums[nums.length - 1]) return nums.length

  while (left <= right) {
    let mid = parseInt((left + right) / 2)

    if (target <= nums[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left
};
