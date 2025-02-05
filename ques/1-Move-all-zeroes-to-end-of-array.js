function moveZeroesToEnd(arr) {
    let nonZeroIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]]; // Swap
        nonZeroIndex++;
      }
    }
    return arr;
  }
  
  // Example
  const arr1 = [0, 1, 0, 3, 12];
  console.log(moveZeroesToEnd(arr1)); // Output: [1, 3, 12, 0, 0]