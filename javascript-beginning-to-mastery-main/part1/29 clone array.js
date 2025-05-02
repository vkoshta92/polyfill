// how to clone array 

// how to concatenate two arrays
// charo trike se hm array 1 aur 2 ko concate kr skte hai, change k sar arry1 pr hi hoga 2 pr nhi.

let array1 = ["item1", "item2"];
// dono ki value same hogi kyoki heao ki help se address me  value dalega to koi change hoga to dono me hog.
// let array2=array1;
// console.log(array1===array2);
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0);
// let array2 = array1.slice(0).concat(["item3", "item4"]);

// let array2 = [].concat(array1);
// let array2 = [].concat(array1,["item3", "item4"]);
// new way 
// spread operator
// let array2 = [...array1];
let oneMoreArray = ["item3", "item4"]
let array2 = [...array1, ...oneMoreArray];

array1.push("item3");

console.log(array1===array2);
console.log(array1)
console.log(array2)
