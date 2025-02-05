function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  
  // Example (using destructuring)
  const arr17 = [1, 2, 3, 4];
  swap(arr17, 0, 2);
  console.log(arr17); // Output: [3, 2, 1, 4]