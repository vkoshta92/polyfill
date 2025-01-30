// sum........................(aggregation)
// const arr=[1,2,3,4]

// const sum= arr.reduce((previousValue,currentValue)=>{
// const nextValue=previousValue+currentValue;
// return nextValue;
// });

// console.log(sum);

// multiply....................
// const arr=[1,2,3,4]
// const product = arr.reduce((previousValue,currentValue)=>{
// const nextValue= previousValue*currentValue;
// return nextValue;
// },1);

// console.log(product);

//  segregation
//  const array=[1.1,1.2,1.3,2.2,2.3,2.4];
//  const segregation= array.reduce((previousValue,currentValue)=>{
//     // round of the value
// let floored= Math.floor(currentValue);

// if(!previousValue[floored]){
//     previousValue[floored]=[]
// }

// previousValue[floored].push(currentValue);
// return previousValue;


//  },{})
//  console.log(segregation);



// run in sequence............
//.................
// const upperCase=(str)=>{
//     return str.toUpperCase();
// };

// // const result= upperCase("vishnukant");
// // console.log(result);

// //........
// const reverse=(str)=>{
//     return str.split('').reverse().join("");
// }
// // const result= reverse("vishnukant");
// // console.log(result);


// //..............
// const append=(str)=>{
//     return "Hello"+str;
// };

// const arr= [upperCase,reverse,append];
// // console.log(arr);



// //initilal  value
// const initialValue="learnersbucket";

// const finalValue=arr.reduce((previousValue,currentElement)=>{

//     const newValue=currentElement(previousValue)
// return newValue;
// },initialValue);

// console.log(finalValue);

// using promise......................

const asyncTask=function(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(`completing ${time}`)),100*time;
    });
}

// create an array of task
const promises=[asyncTask(3),
asyncTask(1),
asyncTask(7),
asyncTask(2),
asyncTask(5),
];

//main function to run promise in series
const asyncSeriesExecuter= function(promises){
    promises.reduce((acc,cur)=>{
        // return when previus promis resolve
        return acc.then(()=>{
            // run the current promise
            return cur.then(val=>{console.log(val)});
        });
    }, Promise.resolve());
};

asyncSeriesExecuter(promises);
"Completing 3"
"Completing 1"
"Completing 7"
"Completing 2"
"Completing 5"



