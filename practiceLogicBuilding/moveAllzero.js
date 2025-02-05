
function moveAllZero(arr){
    let nonZeroIndex=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] !==0){
            [arr[i],arr[nonZeroIndex]]=[arr[nonZeroIndex],arr[i]];
            console.log(arr[nonZeroIndex])
            nonZeroIndex++;
            

        }
    }
    return arr;
}
let arr= [1,2,3,0,1,3,0,3]

console.log(moveAllZero(arr))