function isAnagram(s, t) {
    // Check if the strings have the same length
    if (s.length !== t.length) {
      return false;
    }
  
    // Create a frequency table for each string
    const freqS = {};
    const freqT = {};
  
    for (let i = 0; i < s.length; i++) {
      freqS[s[i]] = (freqS[s[i]] || 0) + 1;
      freqT[t[i]] = (freqT[t[i]] || 0) + 1;
    }
  
    // Compare the frequency tables
    for (let key in freqS) {
      if (freqS[key] !== freqT[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Test the function with some examples
  console.log(isAnagram('anagram', 'nagaram')); // Output: true
  console.log(isAnagram('rat', 'car')); // Output: false
  