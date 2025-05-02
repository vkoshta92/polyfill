// event object 
// const firstButton = document.querySelector("#one");

// arrow function ke case me this ki value console me window show krti hai.

// firstButton.addEventListener("click", function(event){
//     console.log(event);
// })

// jab bhi mai kisi bhi element pe event listener add hoga 
// js Engine --- line by line execute karta hai 
// browser ---- js Engine + extra features 
// browser ----- js Engine + WebApi

// jab browser ko pata chala ki user ne event perform kia 
// jo hum listen kar rahe hai 
// browser ----- 2 
// 1.) callback function hai vo js Engine ko degi ...... 
// 2.)  callback function ke sath browser jo event hua hai uski information bhi dega
// ye info hamein ek object ke form mai milegi 


const allButtons = document.querySelectorAll(".my-buttons button");

// target menas - kis event se element ko trigger kiya
// current target means-kis element me hmne event listner attach kiya tha.
//  add event listner me arrow function me this ni use kr skte hai pr agr usme object e ya koi bh usr kre to ye work krega.s
for(let button of allButtons){
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget);
    })
}