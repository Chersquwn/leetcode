// problem https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let len = m + n - 1

  while (n > 0) {
    if (nums1[m-1] > nums2[n-1]) {
      nums1[len--] = nums1[--m]
    } else {
      nums1[len--] = nums2[--n]
    }
  }
};
