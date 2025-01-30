// 25 minutes

// const twoSum=function(nums,target){
//     let map={};
//     for (let i=0; i<nums.length;i++){
//         let value= nums[i];
//         let pair=target-value;
//         if(map[pair] !==  undefined){
//             return [map[pair],i];
//         }
//         else{
//             map[value]=i;
//             console.log(map,i);
//         }
//     }
// }
//  console.log(twoSum([1,3,2,5,6,4],7));




// 11 minutes
// const twoSum=function(nums,target){
//     let map={};
//     let array=[];
//     for (let i=0;i<nums.length;i++){
//         let x= nums[i];
//         let pair = target-x;
//         if(map[pair]!==undefined){
//             array.push([map[pair],i])
//             // return [map[pair],i]

//         }
//         else{
//             map[x]=i
//         }
//     }
//     return array;
// }
// const result= twoSum([1,3,5,2,7,6],9)
// console.log(result);


// const result= twoSum([1,3,5,2,7,6],9)
// console.log(result);


// 5 minutes
//  const twoSum = function(array,target){
// let map= {};
// for (let i=0; i<array.length;i++)
// {
//  let value  = array[i];
//  comp = target- value;
//   if (map[comp]!==undefined){
//     return [map[comp],i]
//   }
//   else{
//     map[value]=i
//   }
// }
//  }

//  const result= twoSum([1,3,5,2,7,6],9)
// console.log(result);




// 3 minutes
const twoSum= function(array,target){
let hashMap={};
for (let i=0; i<array.length;i++){
    a= array[i];
    comp= target-array[i];
    if(hashMap[comp]!==undefined){
        return [hashMap[comp],i]
    }
    else{
        hashMap[a]=i
    }
}
}

 const result= twoSum([1,3,5,2,7,6],9)
console.log(result);