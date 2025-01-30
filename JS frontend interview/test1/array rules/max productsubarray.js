function maxProduct(nums) {
    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let result = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
      let curr = nums[i];
      let tempMax = Math.max(curr, maxSoFar * curr, minSoFar * curr);
      minSoFar = Math.min(curr, maxSoFar * curr, minSoFar * curr);
      maxSoFar = tempMax;
      result = Math.max(result, maxSoFar);
    }
  
    return result;
  }
  
  const nums = [2, 3, -2, 4];
  const result = maxProduct(nums);
  
  console.log(result); // Output: 6
  