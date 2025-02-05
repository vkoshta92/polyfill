let arr = [];
let size = arr.length;
let max = 5;

function push(data) {
  // if(size>max){
  //     console.log("stack memory is full and now data will not push.");
  //     return;
  // }
  arr[size] = data;
  size++;

  return arr;
}

function pop() {
  if (size > 0) {
    size--;
    arr.length = size;
  }

  return arr;
}

console.log(push(20));
console.log(push(20));
console.log(push(50));
console.log(push(20));
console.log(push(20));
console.log(push(50));
console.log(push(20));
console.log(push(20));
console.log(push(50));
console.log(pop());
console.log(pop());
