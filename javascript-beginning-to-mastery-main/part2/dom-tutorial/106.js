// change the styles of elements
// const mainHeading = document.querySelector("div.headline h2");
// console.log(mainHeading.style);
// mainHeading.style.backgroundColor = "blue";
// mainHeading.style.border = "20px solid green";

// const mainHeading=document.querySelector("div.headline h2")


const mainHeading=document.querySelector("div.headline h2");
// console.log(mainHeading.style);
mainHeading.style.backgroundColor="green";
mainHeading.style.border="2px solid red";
mainHeading.style.color="black";








// function sum(number) {
//     if (number===0) {
//         return 0;
//     }
//     return number + sum(number-1);
// }

// sum(10)


// function pow(number, power) {
//     if (power===1) {
//         return number;
//     }
//     return number * pow(number, power-1);
// }

// const result=pow(2,2);
// console.log(result)

function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(5));
