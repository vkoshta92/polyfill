// methods
// function inside object

// this  , pura vhi object hta hai.
// person1 .about krenge to this keyword person1 se lega , next time me person 2 and then persen 3 ki value print krega.
function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}


// const person1 = {
//     firstName : "harsh",
//     age: 8,21    
//     about: function personInfo(){
//         console.log(`person name is ${this.firstName} and age is ${this.age}`);
//     }
// }



const person1 = {
    firstName : "harsh",
    age: 8,
    about: personInfo
}
const person2 = {
    firstName : "mohit",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "nitish",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();

