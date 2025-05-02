// Promise
// future value
console.log("script start");
const bucket = ['coffee', 'chips','vegetables','salt','rice'];



const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
        resolve({value:"friedrice"});
    }else{
        reject("could not do it");
    }
})

// romise produce 



// consume 
// how to consume 

// friedRicePromise.then(
//     // jab promise resolve hoga 
//     (myfriedRice)=>{
//     console.log("lets eat ", myfriedRice);
//     },
//     // jab promise reject hoga.
//     (error)=>{
//         console.log(error)
//     }
// )

// promise a sync programing  is km ko brower krega, script khtm krne ke bad jse settime out bd m run hota tha vse hi promise bhi bad me run hoga.
// promise microtask queue me add ho jte h j tk script vlarun krta hai.jb tk call stack me km hota rhega event loop ise age nhi bdne dega.
// phle catch vla run hoga bad me then vla run hoga.


friedRicePromise.then(
    // jab promise resolve hoga 
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
    }
    // jab promise reject hoga.to error vla chl jega aur could not do it aa jega
    ).catch(
    (error)=>{
        console.log(error)
    })


// phle script strt ayega, phir 100 line print hongi phir script end hoga. ab do km bche promise and settimeout dono browser me hai.
// phle micritask queue vla task yni promise vla chlega phir call back queue yani settimeout vla print hoga.


setTimeout(()=>{
    console.log("hello from settimeout")
},0)

for(let i = 0; i <=100; i++){
    console.log(Math.random(), i);
}

console.log("script end!!!!")