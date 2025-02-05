function rotateArray(arr, k) {
    k = k % arr.length; // Handle k > arr.length
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
    return arr;
  }
  
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  
  // Example
  const arr7 = [1, 2, 3, 4, 5, 6, 7];
  console.log(rotateArray(arr7, 3)); // Output: [5, 6, 7, 1, 2, 3, 4]