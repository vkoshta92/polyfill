// objects reference type - means ak ki value dusre me dal denge to dono me changes ak strh honge.
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 

// const person = {name:"Harshit",age:22};
const person = {
    name: "harshit",
    // age nmae in sab key me "" bhi use kr skte hai.
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
console.log(person);

// how to access data from objects 
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person.hobbies);

// how to add key value pair to objects
person.gender = "male";
person["person"] = "male";

// console.log(person["name"]);
console.log(person);