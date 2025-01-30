// comely
function countUniqueNumber(array){
let hashMap={};
let duplicateArray=[];

// traversing an array
for (let i=0;i<array.length;i++){
    if(!hashMap[array[i]]){
        hashMap[array[i]] =1;
    }
    else{
        hashMap[array[i]] +=1;
    }
}
//console.log(hashMap);
// traversing a map
for(let key in hashMap){
    if (hashMap[key]>1){
        duplicateArray.push(key)
    }
}
return duplicateArray


}

const result= countUniqueNumber([1,1,2,3,3,4,5,7,8])
console.log(result);






// let removeDuplicates= function(nums){
//     let index=1;
//     for (let i=1;i<nums.length;i++){
//         if(nums[i]!==nums[i-1]){
//             nums[index]=nums[i];
//             index++;
//         }
//     }
//     return index
// }





