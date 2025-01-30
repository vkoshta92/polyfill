function characterReplacement(s, k) {
    const freq = {};
    let left = 0, right = 0;
    let maxFreq = 0;
    let maxLength = 0;
  
    while (right < s.length) {
      freq[s[right]] = freq[s[right]] ? freq[s[right]] + 1 : 1;
      maxFreq = Math.max(maxFreq, freq[s[right]]);
      if (right - left + 1 - maxFreq > k) {
        freq[s[left]]--;
        left++;
      }
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
    }
  
    return maxLength;
  }
  
  // Example usage:
  console.log(characterReplacement("ABAB", 2)); // Output: 4
  console.log(characterReplacement("AABABBA", 1)); // Output: 4
  