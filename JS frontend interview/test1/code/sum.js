
//  target sum, comely
function twoSum(array,num){
     let arr=[];
     let hashMap={};

     for(let i=0; i<array.length;i++){
        let complement= num-array[i];
        if (hashMap[complement]){
            arr.push([complement,array[i]])
        }
        if(!hashMap[array[i]]){
            hashMap[array[i]]=1;
            
        }
        else{
            hashMap[array[i]] +=1;
        }
     }
     console.log(hashMap);
     return arr
     }

     const result = twoSum([5,2,3,1,4,6,2,3],6);
     console.log(result);
