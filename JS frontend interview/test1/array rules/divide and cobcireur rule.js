function findMax(arr) {
    if (arr.length === 1) {
      return arr[0];
    } else {
      const leftHalf = arr.slice(0, arr.length / 2);
      const rightHalf = arr.slice(arr.length / 2);
      const maxLeft = findMax(leftHalf);
      const maxRight = findMax(rightHalf);
      return Math.max(maxLeft, maxRight);
    }
  }
  
  const myArray = [4, 8, 2, 9, 5, 10, 1];
  const maxElement = findMax(myArray);
  console.log(maxElement); // output: 10
  