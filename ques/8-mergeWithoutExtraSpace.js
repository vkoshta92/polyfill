function mergeWithoutExtraSpace(arr1, arr2) {
    let i = 0;
    let j = 0;
    let k = arr1.length - 1;
  
    while (i <= k && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        i++;
      } else {
        [arr1[k], arr2[j]] = [arr2[j], arr1[k]];
        k--;
        j++;
      }
    }
    arr1.sort((a, b) => a - b); // Important: Sort arr1 in-place
    arr2.sort((a, b) => a - b); // Important: Sort arr2 in-place
    return [arr1, arr2];
  }
  
  // Example
  const arr8_1 = [1, 4, 7, 8, 10];
  const arr8_2 = [2, 3, 9];
  console.log(mergeWithoutExtraSpace(arr8_1, arr8_2));
  // Output: [[1, 2, 3, 4, 7], [8, 9, 10]]