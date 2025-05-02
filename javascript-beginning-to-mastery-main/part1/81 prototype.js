function hello(){
    console.log("hello world");
}
// prototypoe sirf functions me hota hai aur kisi me nhi
// const hello=["value1"]

// javascript function ===> function  + object
// function object ki trh bhi krta hai.
// function ka nam batata hai.
// console.log(hello.name);

// you can add your own properties 
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties.


// console.log(hello.prototype); // {}

// only functions provide prototype property

// function me ak free ki space deta h prototype ke roop me.

// // only function hi prototype provide krta hai.(constructer provide krta h free spae me)
// console.log(hello.prototype)

// kewal function me hi prototype hota ha kisi me nhi.
if(hello.prototype){
    console("prototype is present")
}
else{
    console.log("prototype is not present")
}



hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalalla";
};
console.log(hello.prototype.sing());