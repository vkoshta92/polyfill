function findMinMax(arr) {
    if (arr.length === 0) return null; // Handle empty array
    let min = arr[0];
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) min = arr[i];
      if (arr[i] > max) max = arr[i];
    }
    return { min, max };
  }
  
  // Example
  const arr19 = [3, 1, 5, 2, 6];
  console.log(findMinMax(arr19)); // Output: { min: 1, max: 6 }






//   function findMinMax(arr) {
//     if (arr.length === 0) {
//       return "Array is empty. Cannot find min and max."; // Handle empty array case
//     }
  
//     let min = arr[0]; // Assume the first element is both min and max initially
//     let max = arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < min) {
//         min = arr[i]; // Update min if a smaller element is found
//       }
//       if (arr[i] > max) {
//         max = arr[i]; // Update max if a larger element is found
//       }
//     }
  
//     return { min: min, max: max }; // Return an object containing min and max
//   }
  
//   // Example usage:
//   const myArray = [3, 1, 4, 1, 5, 9, 2, 6];
//   const result = findMinMax(myArray);
//   console.log(result); // Output: { min: 1, max: 9 }
  
//   const emptyArray = [];
//   const resultEmpty = findMinMax(emptyArray);
//   console.log(resultEmpty); // Output: Array is empty. Cannot find min and max.