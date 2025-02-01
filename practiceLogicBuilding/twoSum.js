// 1st
// let arr= [2,6,5,8,14];
// let target=14;
// let result=[];

// function twoSum(arr,target){
//     for (let i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if (arr[i]+arr[j]===target){
//             result.push(arr[i]);
//             result.push(arr[j]);
//             // return {result,i,j} ;

//             }
//         }
//     }
//     return result;
// }

// console.log(twoSum(arr,target))

// 2nd

// function twoSum(arr, target) {
//   let map = {};
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let complement = target - arr[i];
//     if (map.hasOwnProperty(complement)) {
//       result.push(arr[i], complement);
//     //   return result;
//     }
//     map[arr[i]]=i;
//   }
//   return result.length > 0 ? result : "No pairs found";
// }

// let arr=[1,6,5,2,5,4]
// let target=10;
// console.log(twoSum(arr,target))


// 3rd
function twoSum(arr,target){
    let map={};
    let result=[];

    for (let i=0;i<arr.length;i++){
        let diff= target-arr[i];
        // if(map.hasOwnProperty(diff)){
        if(map[diff]){
            for (let j=0;j<map[diff];j++){
            result.push([arr[i],diff]);
            }
        }
        map[arr[i]]= (map[arr[i]] || 0)+1;
    }
    return result.length > 0 ? result : "No pairs found";
}

 let arr= [1,2,4,3,6,1,8];
 let target=9;

 let data=twoSum(arr,target);
 console.log(data);

