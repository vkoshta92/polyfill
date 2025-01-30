// function getAllPalindromicSubstrings(str) {
//     const result = [];
    
//     // check all possible substrings
//     for (let i = 0; i < str.length; i++) {
//       for (let j = i + 1; j <= str.length; j++) {
//         const substring = str.slice(i, j);
        
//         // check if the substring is palindrome
//         if (isPalindrome(substring)) {
//           result.push(substring);
//         }
//       }
//     }
    
//     return result;
//   }
  
//   function isPalindrome(str) {
//     // check if the string is palindrome
//     for (let i = 0; i < Math.floor(str.length / 2); i++) {
//       if (str[i] !== str[str.length - i - 1]) {
//         return false;
//       }
//     }
    
//     return true;
//   }
  

function getAllPalindromicSubstrings(str) {
    const result = [];
    
    // iterate over each character in the string
    for (let i = 0; i < str.length; i++) {
      // expand around the center to find odd-length palindromes
      expandAroundCenter(i, i, result, str);
      
      // expand around the center to find even-length palindromes
      expandAroundCenter(i, i + 1, result, str);
    }
    
    return result;
  }
  
  function expandAroundCenter(left, right, result, str) {
    // expand around the center to find palindromic substrings
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      result.push(str.slice(left, right + 1));
      left--;
      right++;
    }
  }
  