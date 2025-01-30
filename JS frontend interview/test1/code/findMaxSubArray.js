// function maxSubarraySum(arr) {
//     let maxSum = arr[0];
//     let currentSum = arr[0];
    
//     for (let i = 1; i < arr.length; i++) {
//       currentSum = Math.max(arr[i], currentSum + arr[i]);
//       maxSum = Math.max(maxSum, currentSum);
//     }
    
//     return maxSum;
//   }
  
//   const myArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
//   const maxSum = maxSubarraySum(myArray);
//   console.log(maxSum); // output: 6
  

const maxSubArray = function(nums) {
    let preSum = nums[0];
    let maxSum = preSum;
    for (let i = 1; i < nums.length; i++) {
      preSum = preSum > 0 ? preSum + nums[i] : nums[i];
      maxSum = Math.max(preSum, maxSum);
    }
    return maxSum;
  };
  