function findKthSmallest(arr, k) {
    // Using QuickSelect (Hoare's selection algorithm) for efficiency
    function quickSelect(left, right) {
      const pivotIndex = partition(left, right);
      if (pivotIndex === k - 1) return arr[pivotIndex];
      if (pivotIndex < k - 1) return quickSelect(pivotIndex + 1, right);
      return quickSelect(left, pivotIndex - 1);
    }
  
    function partition(left, right) {
      const pivot = arr[right];
      let i = left;
      for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          i++;
        }
      }
      [arr[i], arr[right]] = [arr[right], arr[i]];
      return i;
    }
  
    return quickSelect(0, arr.length - 1);
  }
  
  function findKthLargest(arr, k) {
    return findKthSmallest(arr, arr.length - k + 1);
  }
  
  // Example
  const arr11 = [3, 1, 5, 1, 2, 6];
  console.log("3rd smallest:", findKthSmallest(arr11, 3)); // Output: 3
  console.log("2nd largest:", findKthLargest(arr11, 2)); // Output: 5