let str = "indiaisagreatcountry";
let arr = str.split("");
console.log(arr);
let obj = {};
arr.forEach((el) => {
  if (!obj[el]) {
    obj[el] = 1;
  } else {
    obj[el]++;
  }
});
console.log(obj);
let data= Array.from(Object.keys(obj));
let newStr= data.join(",");
console.log(data);
console.log(newStr)


