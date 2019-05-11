// problem https://leetcode.com/problems/reverse-vowels-of-a-string/

/**
 * @param {string} s
 * @return {string}
 *
 * 算法：首尾指针逼近
 */
const reverseVowels = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let start = 0
  let end = s.length - 1
  const S = s.split('')

  while (start < end) {
    if (!vowels.includes(S[start]) && !vowels.includes(S[end])) {
      start++
      end--
    } else if (!vowels.includes(S[start]) && vowels.includes(S[end])) {
      start++
    } else if (vowels.includes(S[start]) && !vowels.includes(S[end])) {
      end--
    } else {
      [S[start], S[end]] = [S[end], S[start]]
      start++
      end--
    }
  }

  return S.join('')
};
