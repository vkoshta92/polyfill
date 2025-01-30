// promises in js
// sync and async code

// async
// console.log("start");

// // web api
// setTimeout(()=>{
//     console.log(" subscribe to vishnu");
// },2000)
 


//   console.log('flinished');


//.......
console.log("start");
 function importantAction(username){
    setTimeout(()=>{
        return `subsribe  to ${username}`
    },2000);
 }
 
  const message= importantAction("vishnu");
  console.log(message); //undefined // kyoki async nhi hai.

console.log('end');

