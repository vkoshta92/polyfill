// block scope vs function scope 


// let and const are block scope
// var is function scope 


// var ke case me ak object me h to dusre jgh use kr skte hai but let and const ke case me asa nhi kar skte hai.
// {
//     var firstName="harshit";
//     console.log(firstName)
// }

// {
//     console.log(firstName)
// }


// if(true){
//     var firstName = "harshit";
//     console.log(firstName);
// }

// console.log(firstName);


// matlb let and const me agar function nhi mil rha h tp apne lexical mtlb bhr vle function dekhega andr nhi , bhr hua to print kr dega.
function myApp(){
    if(true){
        var firstName = "harshit";
        console.log(firstName);
    }

    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();