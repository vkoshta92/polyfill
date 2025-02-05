function subArraySum(arr, targetSum) {
    let currentSum = 0;
    let start = 0;
  
    for (let end = 0; end < arr.length; end++) {
      currentSum += arr[end];
  
      while (currentSum > targetSum) {
        currentSum -= arr[start];
        start++;
      }
  
      if (currentSum === targetSum) {
        return [start + 1, end + 1]; // Return 1-based indexing
      }
    }
    return [-1]; // No subarray found
  }
  
  // Example usage:
  const arr2 = [1, 2, 3, 7, 5];
  const targetSum = 12;
  const result = subArraySum(arr2, targetSum);
  console.log(result); // Output: [2, 4] (indicating indices 2 to 4, which sum to 12)