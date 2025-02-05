
// function reArrange(arr,n){
//     let temp=[]
//     arr.slice(0,n).forEach((el,i)=>{
// temp.push(el,arr[i+n]);
//     })
//     return temp;
// }
// let arr= [1,2,3,4,5,6,7,8]
// let n= 4
// console.log(reArrange(arr,n))


function reArrange(arr,n){
    let temp=[];
    for (let i=0;i<n;i++){
        temp.push(arr[i],arr[i+n]);
    }
    return temp;
}
let arr= [1,2,3,4,5,6,7,8]
let n= 4
console.log(reArrange(arr,n))