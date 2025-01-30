let arr= [1,1,2,2,2,3,5,6,4,1];
let obj ={}

arr.forEach(function(ele){
    if(obj[ele]){
        obj[ele]++;
    }
    else{
        obj[ele]=1;
    }
})

for (let key in obj){
    console.log(`${key}: ${obj[key]}`);
}