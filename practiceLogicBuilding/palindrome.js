function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // If characters don't match, it's not a palindrome
        }
        left++;
        right--;
    }

    return true; // If loop completes, it's a palindrome
}

// Test Cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("level"));   // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("a"));       // true (single letter is always a palindrome)
console.log(isPalindrome(""));        // true (empty string is a palindrome)
