// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol as key , magar map me key kuch bhi ho skti hai.
// 

// in maps you can use anything as key
// like array, number, string 

// object literal 
// key -> string 
// key -> symbol
// const person = {
//     firstName : "harshit",
//     age: 7,
//     1:"one"
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }
// map  me key string array kuch bhi ho skti hai.
// key value pair 
// const person = new Map();
// person.set('firstName', 'Harshit');
// person.set('age', 7);
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// person.set({1: 'one'},'onetwothree');
// console.log(person);
// console.log(person.get(1));
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }

// destructure krke key value ayegi.
// for(let [key, value] of person){
//     // console.log(Array.isArray(key));
//     console.log(key, value)
// }


// object ittrable nhi hote hai for of loop nhi lga skte hai, for in laga ste hai , pe map me laga skte hai, 


// array ke form me dega.
// for(let key of person){
//     console.log(key)
// }

// destructure

// array ke form me dega.
for(let [key,value] of person){
    // console.log(Array.isArray(key));
    console.log(key,value)
}


// const person=new Map([['firstName','harshit'],['age',7]])
// console.log(person);



const person1 = {
    id: 1,
    firstName: "harshit"
}
const person2 = {
    id: 2,
    firstName: "harshta"
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 8, gender: "male"});
extraInfo.set(person2, {age: 9, gender: "female"});
// console.log(userInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);
