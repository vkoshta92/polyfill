// proto, prototype, class
// function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 

const user={
    firstName:"harshit",
    lastName:"vashishtha",
    email:"harshvasish@gmail.com",
    age:2,
    address:"House Number,Colony,pincode,state",
    about: function(){
        return `${this.firstName} is${this.age} years old`
},
is18:function(){
    return this.age>=18;
}

}

 const aboutUser =user.about();
 console.log(aboutUser)


// multiple user bannae ke liye hm log ise use krte hai.
// function (that function creare object)
// add key value pair
// object ko return krega.
// object ke andr jo function hota h use method khenge.




// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     };
//     user.is18 =  function(){
//         return this.age >= 18;
//     }
//     return user;
// }

// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 19, "my address");
// console.log(user1);
// const is18 = user1.is18();
// const about = user1.about();
// console.log(about);