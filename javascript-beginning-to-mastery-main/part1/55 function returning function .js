// function returning function 

function myFunc(){
    function hello(){
        return "hello world"
    }
    return hello;
}

// ans ak function bn jega kyoki func ke and func hai.
const ans = myFunc();
console.log(ans());


// function myFunc(){
//     return function(){
//         return "hello world"
//     }
    
// }

// const ans = myFunc();
// console.log(ans());