function isValid(s) {
    const stack = [];
    const map = {
      '(': ')',
      '[': ']',
      '{': '}'
    };
  
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
  
      if (map[c]) {
        stack.push(map[c]);
      } else if (c !== stack.pop()) {
        return false;
      }
    }
  
    return stack.length === 0;
  }
  
  // Test the function with some examples
  console.log(isValid('()')); // Output: true
  console.log(isValid('()[]{}')); // Output: true
  console.log(isValid('(]')); // Output: false
  console.log(isValid('([)]')); // Output: false
  console.log(isValid('{[]}')); // Output: true
  