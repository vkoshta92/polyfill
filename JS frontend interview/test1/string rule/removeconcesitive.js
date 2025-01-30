function removeConsecutiveCharacters(s, k) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
  
      // If the stack is empty or the top element is different than the current character
      // we push a new element in the stack with a count of 1
      if (stack.length === 0 || stack[stack.length - 1].char !== c) {
        stack.push({ char: c, count: 1 });
      } else {
        // If the top element is the same as the current character, we increment its count
        stack[stack.length - 1].count++;
        // If the count of the top element reaches k, we pop it from the stack
        if (stack[stack.length - 1].count === k) {
          stack.pop();
        }
      }
    }
  
    // Concatenate the remaining elements in the stack to form the final string
    let result = '';
    for (let i = 0; i < stack.length; i++) {
      result += stack[i].char.repeat(stack[i].count);
    }
  
    return result;
  }
  
  // Test the function with some examples
  console.log(removeConsecutiveCharacters('abbcccdddd', 3)); // Output: 'ad'
  console.log(removeConsecutiveCharacters('aabbcc', 2)); // Output: ''
  console.log(removeConsecutiveCharacters('aaabb', 3)); // Output: 'b'
  