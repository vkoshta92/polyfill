// every method
// const numbers = [2,4,6,9,10];


// isko jse hi ak bhi false milega ye false print kar dega, jab tak true hai tab tak ye check karta rhega .


// function isEven(number){
//     return number%===0;
// }

// const ans = numbers.every((isEven);

// console.log(ans);



// const ans = numbers.every((number)=>number%2===0);

// console.log(ans);

// callback function--->true/false(boolean)
// everymethod ---> true/false (boolean)


// every product price less then 30000.
const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]


const ans = userCart.every((cartItem)=>cartItem.price < 30000);
console.log(ans);