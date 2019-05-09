// problem https://leetcode.com/problems/first-bad-version/

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 *
 * 算法：二分查找
 */
const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let low = 0
    let high = n

    while (low <= high) {
      let mid = Math.floor((low + high) / 2)

      if (isBadVersion(mid)) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }

    return low
  };
};
