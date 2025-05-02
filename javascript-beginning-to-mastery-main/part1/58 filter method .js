// filter method 
// ye boolen value return krega jo even ho gya vo aa jega jo nhi hoga vo nhi ayaega arra  me.

const numbers = [1,3,2,6,4,8];

// const isEven=function(number){
//     return number%2===0;
// }


// const evenNumbers=numbers.filter(isEven);
// console.log(evenNumbers)


// second method



const evenNumbers=numbers.filter((number)=>{
    return number%2===0;
});
console.log(evenNumbers);