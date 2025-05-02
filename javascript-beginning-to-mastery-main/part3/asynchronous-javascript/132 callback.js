// understand callback

// function myFunc(callback) {
//   console.log("Function is doing task 1 ");
//   callback();
// }

// pahle myfunc call hoga phir callback function jo myfunc ke andr h vo call hoga.
// myFunc(() => {
//   console.log("function is doing task 2");
// });

// myFunc(myFunc2);

function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    onSuccess(number1, number2);
  } else {
    onFailure();
  }
}

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

// getTwoNumbersAndAdd(4,4,(num1,num2)=>{
//   console.log(num1+num2);
// });


// agar sucees hoga to addtwo number add hoga aur failure hoga to  wrong dattype vla  run hoga.
function onFail(){
    console.log("Wrong data type");
    console.log("please pass numbers only")
}
getTwoNumbersAndAdd(4, 4,addTwoNumbers, onFail);
