function lengthOfLongestSubstring(s) {
    let start = 0, end = 0;
    const set = new Set();
    let maxLen = 0;
  
    while (end < s.length) {
      if (!set.has(s[end])) {
        set.add(s[end]);
        end++;
        maxLen = Math.max(maxLen, end - start);
      } else {
        set.delete(s[start]);
        start++;
      }
    }
  
    return maxLen;
  }
  
  // Example usage:
  console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
  console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
  console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
  