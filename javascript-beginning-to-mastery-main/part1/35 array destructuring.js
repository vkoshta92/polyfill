// array destructuring 
const myArray = ["value1", "value2", "value3","value4","value5"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

// let [myvar1,myvar2] = myArray;
// let [myvar1, ,myvar2] = myArray;
// let myNewArray=myArray.slice(2);

// spred opertaer .... lagane se bachi value value 3 and 4 mynewarray me store ho jengi
let [myvar1, myvar2, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);