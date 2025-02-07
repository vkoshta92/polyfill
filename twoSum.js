function twoSum(arr,target){
    let obj={};
    let result=[];
    for (let i=0;i<arr.length;i++){
        let diff= target-arr[i];
        if(obj[diff]){
            for (let j=0;j<obj[diff];j++){
                result.push([arr[i],diff])
            }
        }
        obj[arr[i]]= (obj[arr[i]]||0)+1;
    }
    return result;
}

let arr= [3,4,1,2,8]
let target= 5;
console.log(twoSum(arr,target));