
// function hello(){
//     console.log("hello world")

// }
// hello.call();



const user1 = {
    firstName : "harshit",
    age: 8,  
    about: function(){
        console.log(this.firstName,this.age)
    } 
}
const user2 = {
    firstName : "mohit",
    age: 9,
    
}


// call se hm user 2 ko bhi prnt kara  skte hai 
user1.about.call(user2);
user1.about.call(); 




// function about(hobby, favMusician){
//     console.log(this.firstName, this.age, hobby, favMusician);
// }
// const user1 = {
//     firstName : "harshit",
//     age: 8,   
// }
// const user2 = {
//     firstName : "mohit",
//     age: 9,
    
// }

// about.call(user2,"cricket","badminton")



// apply
// apply me hm alg alg pass krne k jgh  par ak  array me dono parameter pass  kar skte hai.
// about.apply(user1, ["guitar", "bach"]);

// bind ak function return krte hai direct kuch nhi print karta  hai , ab hmr kabhi bhi use function ko call  karna hoga to hm  call a kar lenge .
// const func = about.bind(user2, "guitar", "bach");
// func();





