// arrow functions 
// arrow me this nhi hota hai , ye apni surround se this lega.
//  arrow function ka this window hota hai , ak level uper.
const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    }   
}

user1.about(user1);