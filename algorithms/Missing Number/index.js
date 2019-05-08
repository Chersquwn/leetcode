// problem https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 算法：异或
 * 1、n = 4, 正常数组 [0, 1, 2, 3]，缺失数组 [0, 1, 3, 4]，缺失值为 2
 * 2、4 ^ 3 ^ 3 ^ 2 ^ 1 ^ 1 ^ 0 ^ 0 = 4 ^ (3 ^ 3) ^ 2 ^ (1 ^ 1) ^ (0 ^ 0)
 * 3、上述等式只要两边再异或上 4（即数组长度），4 ^ 4 ^ 3 ^ 3 ^ 2 ^ 1 ^ 1 ^ 0 ^ 0 = (4 ^ 4) ^ (3 ^ 3) ^ 2 ^ (1 ^ 1) ^ (0 ^ 0) = 2
 */
const missingNumber = function (nums) {
  return nums.reduce((missing, n, i) => missing ^= n ^ i, nums.length)
};
