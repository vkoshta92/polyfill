function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = [];
  
    for (const num of arr) {
      if (seen.has(num)) {
        duplicates.push(num);
      } else {
        seen.add(num);
      }
    }
    return duplicates;
  }
  
  // Example
  const arr5 = [1, 2, 3, 2, 4, 1, 5];
  console.log(findDuplicates(arr5)); // Output: [2, 1]