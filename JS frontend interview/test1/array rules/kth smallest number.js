function kthSmallest(arr, k) {
    arr.sort((a, b) => a - b);
    return arr[k - 1];
  }
  
  const myArray = [4, 2, 8, 1, 5, 9, 3];
  const k = 3;
  const kth = kthSmallest(myArray, k);
  console.log(kth); // output: 3
  