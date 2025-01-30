function maxSubarraySum(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
      maxEndingHere = Math.max(maxEndingHere + arr[i], arr[i]);
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
  
    return maxSoFar;
  }
  
  const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const maxSum = maxSubarraySum(arr);
  
  console.log(maxSum); // Output: 6
  