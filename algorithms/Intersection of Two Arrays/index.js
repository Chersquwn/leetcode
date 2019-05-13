// problem https://leetcode.com/problems/intersection-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  const set1 = new Set(nums1)

  return [...new Set(nums2.filter(item => set1.has(item)))]
};
