function containsDuplicate(nums) {
    const map = new Map();
  
    for (const num of nums) {
      if (map.has(num)) {
        return true;
      }
      map.set(num, 1);
    }
  
    return false;
  }
  
  const nums = [1, 2, 3, 1];
  const result = containsDuplicate(nums);
  
  console.log(result); // Output: true
  