/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let chatMap = new Map();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right ++) {
        const currentChar = s[right];
        if (chatMap.has(currentChar) && chatMap.get(currentChar) >= left) {
            left = chatMap.get(currentChar) + 1;
        }
        chatMap.set(currentChar, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
};