// problem https://leetcode.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 算法：贪心算法
 * 1、因为必须间隔至少 1 个位置，所以从第 4 项起，每一项保存其当前累计的最大值，则最后只需要判断末尾两项值的大小，取最大值即可
 * 2、即 nums[i] += Math.max(nums[i - 2], nums[i - 3]), i > 3
 * 3、对于 i < 3的情况，nums 长度为 2，满足判断取末尾两项值的最大者
 * 4、对于 i = 3，为满足【2】中通项，通过对 nums 首项补 0
 */
const rob = function (nums) {
  if (nums.length === 0) return 0

  nums.unshift(0)

  for (let i = 3; i < nums.length; i++) {
    nums[i] += Math.max(nums[i - 3], nums[i - 2])
  }

  return Math.max(nums[nums.length - 1], nums[nums.length - 2])
};
