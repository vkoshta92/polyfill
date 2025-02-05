function removeArray(arr, n) {
    console.log(arr);
  for (let i = n; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length= arr.length-1;
  return arr;
}


let arr= [1,2,3,4,5,7,8,9];
let n=4;

console.log(removeArray(arr,n));