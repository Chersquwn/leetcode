// problem https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const hashmap = {}

  for (let i = 0; i < nums.length; i++) {
    let other = target - nums[i]

    if (hashmap[other] !== undefined) {
      return [hashmap[other], i]
    }

    hashmap[nums[i]] = i
  }
}
