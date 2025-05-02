function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
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

// agar prototype vali nhi use krna chte to ye use krenge, ab about is 18 sing print nhi hoga.
for(let key in user1){
    // console.log(key);
    // agar koi function bna a bout ya koi to conition false ho jegi aue kewal isi ki keys print hongi proto vli nhi
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }

}
