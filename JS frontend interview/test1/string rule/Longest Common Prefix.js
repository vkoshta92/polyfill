function longestCommonPrefix(strs) {
    if (strs.length === 0) {
      return '';
    }
  
    // Initialize the prefix to be the first string in the array
    let prefix = strs[0];
  
    // Iterate over the remaining strings in the array
    for (let i = 1; i < strs.length; i++) {
      // While the current string does not start with the prefix, remove the last character from the prefix
      while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.slice(0, -1);
        // If the prefix becomes empty, return an empty string
        if (prefix.length === 0) {
          return '';
        }
      }
    }
  
    return prefix;
  }
  
  // Test the function with some examples
  console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // Output: 'fl'
  console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // Output: ''
  