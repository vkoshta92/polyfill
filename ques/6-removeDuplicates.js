function removeDuplicates(arr) {
    if (arr.length === 0) return 0;
    let uniqueIndex = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[uniqueIndex]) {
        uniqueIndex++;
        arr[uniqueIndex] = arr[i];
      }
    }
    return uniqueIndex + 1; // Length of the unique array
  }
  
  // Example
  const arr6 = [1, 1, 2, 2, 3, 4, 4];
  const newLength = removeDuplicates(arr6);
  console.log(newLength); // Output: 4
  console.log(arr6.slice(0, newLength)); // Output: [1, 2, 3, 4]