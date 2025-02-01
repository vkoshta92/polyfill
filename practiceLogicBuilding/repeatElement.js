function repeatElement(arr) {
  let obj = {};
  arr.forEach((el) => {
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  });
  return obj;
}

let arr = [1, 2, 3, 1, 2, 1, 5, 3, 2, 1];
let newObj = repeatElement(arr);

for (let key in newObj) {
  console.log(`${key}:${newObj[key]}`);
}
