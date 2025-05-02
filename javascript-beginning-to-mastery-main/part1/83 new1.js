// new keyword 
// 1.) this = {}
// 2.) return {} 
//new keyword 3 km krta hai
// 1. empty object this={}
// 2.return this
// 3.Object.create(createuser.prototype)  ye km krega.

// function createUser(firstName,age){
//     this.firstName=firstName;
//     this.age=age;

// }

// createUser.prototype.about=function(){
//     console.log(this.firstName,this.age);
// }
// // this new keyword ki vgh se jase hm proto me kr rhe the user new keyword ki madad se about function ki value fetch kr lega.
// const user1= new createUser("harshit",6)
// user1.about()

// jo hm log object.create krke empty object bnate h vo km new keyword kr deta hai.


// __proto__   same hai. iske
// // official ecmascript document
// [[prototype]] same hai


// new agar lga rhe h to capital letter se function strt hoga.tki phchan ske kha new lagana hai.
// constructor function 
function CreateUser(firstName, lastName, email, age, address){
    // this={}
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    // return this optional h kyoki new khud se return krta hai.
    // return this
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.is18());


// proto=>prototype=>new