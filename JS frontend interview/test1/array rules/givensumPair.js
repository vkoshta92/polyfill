function findPairs(nums, target) {
    const result = new Set();
    const seen = new Set();
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
  
      if (seen.has(complement)) {
        result.add([complement, nums[i]]);
      }
  
      seen.add(nums[i]);
    }
  
    return Array.from(result);
  }
  
  const nums = [1, 2, 3, 4, 5, 6, 7];
  const target = 8;
  const result = findPairs(nums, target);
  
  console.log(result); // Output: [[1, 7], [2, 6], [3, 5]]
  