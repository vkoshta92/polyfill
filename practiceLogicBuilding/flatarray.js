function flatArray(arr){
    let outputArray=[];
    for(let item of arr){
        if(Array.isArray(item))
           outputArray= outputArray.concat(flatArray(item));
        else{
            outputArray.push(item)
        }
    }
    return outputArray;
}

let array = [1, 2, [3, 4, [5, 6, 7]]];

console.log(flatArray(array));