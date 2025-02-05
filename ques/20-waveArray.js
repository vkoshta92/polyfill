function waveArray(arr) {
    arr.sort((a, b) => a - b); // Sort the array in ascending order
  
    for (let i = 0; i < arr.length - 1; i += 2) {
      // Swap adjacent elements
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    return arr;
  }
  
  // Example usage:
  const arr =  [1, 2, 3, 4, 5];
  const wave = waveArray(arr);
  console.log(wave); // Output: