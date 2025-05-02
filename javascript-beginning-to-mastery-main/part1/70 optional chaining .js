// optional chaining 

const user  = {
    firstName: "harshit",

    // address: {houseNumber: '1234'}
}

// kai br property exist nhi krti h to error na de undefined de isliye ?. use krenge.
// iska main use nested object me hota hai.

console.log(user?.firstName);
console.log(user?.address?.houseNumber);