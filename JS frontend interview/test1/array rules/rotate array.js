function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;
    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
  }
  
  function reverse(arr, start, end) {
    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
  
  const myArray = [1, 2, 3, 4, 5];
  const k = 2;
  rotateArray(myArray, k);
  console.log(myArray); // output: [4, 5, 1, 2, 3]
  