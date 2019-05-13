// problem https://leetcode.com/problems/intersection-of-two-arrays-ii/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  const hash1 = {}
  const hash2 = {}
  const result = []

  for (let i = 0; i < nums1.length; i++) {
    hash1[nums1[i]] = hash1[nums1[i]] ? hash1[nums1[i]] + 1 : 1
  }

  for (let i = 0; i < nums2.length; i++) {
    if (hash1[nums2[i]]) {
      if (!hash2[nums2[i]]) {
        hash2[nums2[i]] = 1
      } else {
        hash2[nums2[i]]++
      }

      if (hash1[nums2[i]] >= hash2[nums2[i]]) {
        result.push(nums2[i])
      }
    }
  }

  return result
};
