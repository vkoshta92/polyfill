const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'toon na na na la la ';
    }
}
function createUser(firstName, lastName, email, age, address){
    // jo {} khali obj bna rhe the uski jgh ye likh skte hai.
    const user = Object.create(userMethods);// {}// phle user me checkk krega phir usermethods me
    // __proto__,[[prototype]] me userMethods dal dega use bad me dekhhega phle apne vle user ko.
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1);
// ye phle create user me dhudhega is phir ise use method me dhundhega , kyoki object create se hmne isko link kr diya hai. user 1 proto me save ho jega jb chenge use kr lenge.proto user1 ka refrence hai.
console.log(user1.about());
console.log(user2.about());
console.log(user3.about());

// console.log(user3.sing());