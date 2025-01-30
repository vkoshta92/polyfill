function largestNumber(nums) {
    const sortedNums = nums.map(String).sort((a, b) => (b + a) - (a + b));
    const largestNum = sortedNums.join('');
  
    return largestNum.startsWith('0') ? '0' : largestNum;
  }
  
  const nums = [10, 2, 9, 39, 17];
  const result = largestNumber(nums);
  
  console.log(result); // Output: "93921710"
  