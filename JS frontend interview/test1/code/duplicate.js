 let arr=[];
 function duplicateArray(array){
    for(let i=0;i<array.length;i++){
        if(!arr.includes(array[i])){
            arr.push(array[i])
        }
       
    }
    return arr;
 }


 const result =duplicateArray([1,1,2,3,4,4,5,5]);
 console.log(result);