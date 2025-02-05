function findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
  }
  
  // Example
  const arr14 = [1, 2, 4, 5];
  console.log(findMissingNumber(arr14)); // Output: 3