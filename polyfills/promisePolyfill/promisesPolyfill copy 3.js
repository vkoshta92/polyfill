// promis in js
//promises

console.log('start');

const sub= new Promise((resolve , reject)=>{
setTimeout(()=>{
    const result= true;
    if(result) resolve(" please subscribe vishnu")
     else reject (new Error("why are you not subscribing vishnu"))
},2000);
})


 sub.then((res)=>{
    console.log(res);
 })
 .catch((err)=>{
console.log(err);
 })

console.log('stop');