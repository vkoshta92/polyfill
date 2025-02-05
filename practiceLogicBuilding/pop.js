let arr=[];
let size= arr.length;
let max=5

function pop(data){
  
    // if(size>max){
    //     console.log("stack memory is full and now data will not push.");
    //     return;
    // }
    if(size>0){
       
        size--;;
        arr[size]=data;
    }
     
    
   
    return arr;
}

console.log(stack(20));
console.log(stack(20));
console.log(stack(50));
console.log(stack(20));
console.log(stack(20));
console.log(stack(50));
console.log(stack(20));
console.log(stack(20));
console.log(stack(50));


