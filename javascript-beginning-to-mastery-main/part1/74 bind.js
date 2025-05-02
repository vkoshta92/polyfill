
const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

// don't do this mistake 
// it is wrong method undifined peint krega
// user1.about();
// const myFunc=function(){
//     console.log(this.firstName, this.age);
// }   
// myFunc();

//  it  is right method , isko bind krkr print krnge .
const myFunc = user1.about.bind(user1);
myFunc();