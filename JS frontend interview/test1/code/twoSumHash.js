const twoSum=function(nums,target){
    let map={};
    for (let i=0; i<nums.length;i++){
        let value= nums[i];
        let pair=target-value;
        if(map[pair] !==  undefined){
            return [map[pair],i];
        }
        else{
            map[value]=i;
        }
    }
}

const result= twoSum([5,2,3,1,4,6,2,3],6)
console.log(result);

// const  twoSum=function(nums,target){
//     let map={};
//     for(let i=0;i<nums.length;i++){
//         let value=nums[i];
//         let pair =target-value;
//         if(map[pair]!==undefined){
//             return [map[pair],i];
//         }
//         else{
//             map[value]=i
//         }
       
//     }
// }
// const result= twoSum([5,2,3,1,4,6,2,3],6);
// console.log(result);


// sum error
// function  twoSumHashMap(array,target){
//     let array2=[];
//     let hashMap={};

//     for (let i=0; i<array.length;i++){
//         let complement=target-array[i];
        
//         if (hashMap[complement]){
//             // array2.push([complement,array[i]])
//             array2.push([hashMap[complement],i])
         
//         }

//         if(!hashMap[array[i]]){
//             hashMap[array[i]]=1;
//         }
//         else{
//             hashMap[array[i]] +=1;
//         }

//     }
//     console.log(hashMap);
//     //return Object.keys(hashMap)
//     return array2
  

// }

// const result= twoSumHashMap([5,2,3,1,4,6,2,3],6)
// console.log(result);