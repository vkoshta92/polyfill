// primitve vs reference data types
// let num1 = 6;
// let num2 = num1;
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// num1++;
// console.log("after incrementing num1")
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// primitive type stack hote h isliye num 2 ki value change nhi hui.
// refrence type heap me store hote hai. isliye  array 1 array 2 same rhenge, isme pointer ke address pe push krta hai isliye array 1 and 2 same rhenge.
// reference types 
// array 


let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);