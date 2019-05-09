// problem https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * 算法：
 * 1、zeroIndex 记录 0 元素的起始位置
 * 2、遍历数组，遇到非 0 元素，zeroIndex 自增，该位置放置当前非 0 元素
 * 3、从 zeroIndex 开始，后面全部置为 0 元素
 */
const moveZeroes = function (nums) {
  let zeroIndex = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[zeroIndex++] = nums[i]
    }
  }

  for (let i = zeroIndex; i < nums.length; i++) {
    nums[i] = 0
  }
};
