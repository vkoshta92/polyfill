function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    
    return -1;
  }
  
  const myArray = [1, 2, 4, 5, 8, 9, 10];
  const targetElement = 5;
  const index = binarySearch(myArray, targetElement);
  console.log(index); // output: 3
  