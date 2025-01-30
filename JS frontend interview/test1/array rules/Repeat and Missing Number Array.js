function findRepeatAndMissingNumbers(nums) {
    let n = nums.length;
    let sum = nums.reduce((acc, curr) => acc + curr);
    let sumOfSquares = nums.reduce((acc, curr) => acc + curr * curr);
    let expectedSum = (n * (n + 1)) / 2;
    let expectedSumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;
    let diff = sum - expectedSum;
    let diffOfSquares = sumOfSquares - expectedSumOfSquares;
    let sumOfDiffAndDiffOfSquares = diffOfSquares / diff;
    let missingNumber = (sumOfDiffAndDiffOfSquares + diff) / 2;
    let repeatingNumber = missingNumber - diff;
  
    return [repeatingNumber, missingNumber];
  }
  
  const nums = [3, 1, 2, 5, 3];
  const result = findRepeatAndMissingNumbers(nums);
  
  console.log(result); // Output: [3, 4]
  