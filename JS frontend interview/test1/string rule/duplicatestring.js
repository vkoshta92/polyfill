function printDuplicates(str) {
    const frequencyCounter = {};
  
    // Iterate over the characters in the input string and populate the frequency counter
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      frequencyCounter[char] = frequencyCounter[char] ? frequencyCounter[char] + 1 : 1;
    }
  
    // Iterate over the frequency counter and print out the characters that have a count greater than 1
    for (const char in frequencyCounter) {
      if (frequencyCounter[char] > 1) {
        console.log(char);
      }
    }
  }
  
  // Test the function with some examples
  printDuplicates('hello world'); // Output: 'l', 'o'
  printDuplicates('abcdefg'); // Output: None
  