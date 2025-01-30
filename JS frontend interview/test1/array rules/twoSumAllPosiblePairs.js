
const twoSum=function(nums,target){
    let map={};
    let arr =[];
    for (let i=0; i<nums.length;i++){
        let value= nums[i];
        let pair=target-value;
        if(map[pair] !==  undefined){
             arr.push ([map[pair],i]);
        }
        else{
            map[value]=i;
        }
        console.log(map, i);
    }
    return arr;
}
console.log(twoSum([2,7,11,15,3], 18));


// 8 minutes
// const twoSum=function(array,target){
//     const hashMap={};
//     for (let i=0;i<array.length;i++){
//         value= array[i];
//         pair= target-value;
//         if (hashMap[pair]!== undefined){
//             return [hashMap[pair],i]
//         }
//         else{
//             hashMap[value]=i
//         }
//     }
// }

// const twoSum= function(array,target){
// let hashMap={};
// let arr=[];
//  for (let i=0; i<array.length;i++){
//     x= array[i];
//     c= target-x;
//     if (hashMap[c]!==undefined){
// arr.push([hashMap[c],i]);

//     }
//     else{
//         array[x]=i
//     }
//  }
//  return arr;


// }

// const result = twoSum([1,2,5,3,4,1],5);
// console.log(result);