function SetUsername(username){
    //complex DB calls
    // isko blank refrennce mil ja rha tha par call ki vgh se ab call vla this use krega nad username access ho jega niche.
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    //  call ki vgh se ye this ka execution context uper sethis use kr  liya h , and ab username ko use kar sktea hai.
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);