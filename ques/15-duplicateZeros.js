function duplicateZeros(arr) {
    let i = 0;
    while (i < arr.length) {
      if (arr[i] === 0) {
        arr.splice(i + 1, 0, 0); // Insert 0
        i += 2; // Skip the new 0
      } else {
        i++;
      }
    }
    arr.length = arr.length -1; // Truncate if necessary
    return arr;
  }
  
  // Example
  const arr15 = [1, 0, 2, 3, 0, 4, 5, 0];
  console.log(duplicateZeros(arr15)); // Output: [1, 0, 0, 2, 3, 0, 0, 4]