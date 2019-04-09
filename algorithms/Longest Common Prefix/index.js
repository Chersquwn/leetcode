// problem https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''

  let low = 1
  let high = strs.reduce((prevStr, curStr) => prevStr.length < curStr.length ? prevStr : curStr).length

  while (low <= high) {
    let mid = parseInt((low + high) / 2)

    if (isCommonPrefix(strs, mid)) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return strs[0].substr(0, (low + high) / 2)
};

function isCommonPrefix(strs, p) {
  const str = strs[0].substr(0, p)

  for (let i = 0; i < strs.length; i++) {
    if (!strs[i].startsWith(str)) return false
  }

  return true
}
