//
// arr=[1,2,3,4,5,6];

// arr2=[];

// for ( let i=0; i<arr.length; i++){
//     arr2.unshift(arr[i])
// }
// console.log(arr2);


//.....
let array2= [];
function reverse(array){
for (let i=0; i<array.length; i++){
    array2.unshift(array[i])
}
return array2
}
const result= reverse([1,2,3,4,5]);
console.log(result);



// O(1)
// let num=[11,22,33,46,75,86,97,98];
// function reverseArray(array){
//     if(array.length<=1){
//         return array;
//     }
//    const [first,...rest]=array;
//    console.log(rest,first);
//    return[...reverseArray(rest),first]
// }

// const result= reverseArray(num);
// console.log(result);




  