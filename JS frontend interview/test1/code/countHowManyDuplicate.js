function countUniqueNumber(array){
    let hashMap={};
    let duplicateArray=[];
    let count=0;
    
    // traversing an array
    for (let i=0;i<array.length;i++){
        if(!hashMap[array[i]]){
            hashMap[array[i]] =1;
        }
        else{
            hashMap[array[i]] +=1;
        }
    }
    console.log(hashMap);
    // traversing a map
    for(let key in hashMap){
        if (hashMap[key]>1){
            duplicateArray.push(key)
            count++;
           
        }
    }
    console.log(count);
    return duplicateArray
    
    
    }
    
    const result= countUniqueNumber([1,1,2,3,3,4,5,7,8])
    console.log(result);
    
    
    
    