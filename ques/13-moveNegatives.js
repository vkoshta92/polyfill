function moveNegatives(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      if (arr[left] < 0 && arr[right] < 0) {
        left++;
      } else if (arr[left] >= 0 && arr[right] < 0) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      } else if (arr[left] >= 0 && arr[right] >= 0) {
        right--;
      } else {
        left++;
        right--;
      }
    }
    return arr;
  }
  
  // Example
  const arr13 = [-1, 2, -3, 4, -5, 6];
  console.log(moveNegatives(arr13)); // Output: [-1, -3, -5, 4, 2, 6] (order may vary)