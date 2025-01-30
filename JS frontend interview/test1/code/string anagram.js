function isAnagram(string1,string2){
    if(string1.length !==string2.length){
        return false;
    }


    // hashmap
    let hashMap={};
    for(let letter of string1){
        if(!hashMap[letter]){
            hashMap[letter]=1;
            // console.log(hashMap);
        }
        else{
            hashMap[letter] +=1;
        }
    }
    for (let items of string2){
        if (!hashMap[items]){
            return false;
        }
        else{
            hashMap[items] -=1;
        }
    }
    return true;

}

const result= isAnagram("hello","olleh");
console.log(result);