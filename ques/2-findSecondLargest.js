function findSecondLargest(arr) {
    if (arr.length < 2) return -1; // Handle edge cases
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    for (let num of arr) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
      }
    }
    return secondLargest === -Infinity ? -1 : secondLargest; // No second largest
  }
  
  // Example
  const arr2 = [3, 4, 5, 2, 1];
  console.log(findSecondLargest(arr2)); // Output: 4