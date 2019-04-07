// problem https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length
  let n = nums2.length

  if (m > n) {
    [nums1, nums2] = [nums2, nums1];
    [m, n] = [n, m]
  }

  let low = 0
  let high = m
  let half = (m + n + 1) / 2

  while (low <= high) {
    let i = parseInt((low + high) / 2)
    let j = parseInt(half - i)

    if (i < high && nums1[i] < nums2[j - 1]) {
      low = i + 1
    } else if (i > low && nums1[i - 1] > nums2[j]) {
      high = i - 1
    } else {
      let maxLeft = 0

      if (i === 0) {
        maxLeft = nums2[j - 1]
      } else if (j === 0) {
        maxLeft = nums1[i - 1]
      } else {
        maxLeft = Math.max(nums1[i - 1], nums2[j - 1])
      }

      if ((m + n) % 2 === 1) {
        return maxLeft
      }

      let minRight = 0

      if (i === m) {
        minRight = nums2[j]
      } else if (j === n) {
        minRight = nums1[i]
      } else {
        minRight = Math.min(nums1[i], nums2[j])
      }

      return (maxLeft + minRight) / 2
    }
  }
};
