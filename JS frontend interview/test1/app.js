// [1,1,2,2,3,3,4,4,5,5,6,7,7,8,8,9,9]
function countUnique(array){
    if(array.length>0){
        let arr=[]
        let i=0;
        for(let j=1; j<array.length;j++){
            if(array[i]!== array[j]){
                i++;
                array[i]=array[j];
                arr.push(array[i])
            }
        }
        return arr;
    }
    else {
        throw new Error("array is empty")
    }
}

const result=countUnique([1,1,2,2,3,3,4,4,5,5,6,7,7,8,8,9,9]);
console.log(result);


// 



// function countUnique(array){
//     let hashMap={};

//     for(nums of array){
// hashMap[nums]= (hashMap[nums]||0)+1;
//     }
  
// }

// result=countUnique[1,2,3,4,2,2,1,2];
// console.log(hashMap);







