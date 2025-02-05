function kadanesAlgorithm(arr) {
    let maxSoFar = -Infinity;
    let currentMax = 0;
  
    for (let num of arr) {
      currentMax = Math.max(num, currentMax + num);
      maxSoFar = Math.max(maxSoFar, currentMax);
    }
    return maxSoFar;
  }
  
  // Example
  const arr12 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  console.log(kadanesAlgorithm(arr12)); // Output: 6