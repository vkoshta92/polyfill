// promis in js
//promises

console.log('start');
const sub =Promise.resolve("subscribe vishnu");
// console.log(sub);
sub.then((res)=>{
console.log(res);
})
.catch((err)=>{
console.log(err);
})


console.log('stop');