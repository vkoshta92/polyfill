// find method 

// ye sirf 1 true milne pe ruk jega jase catt mila 4 letter ruk jega vhi age lion ko check nhi krega.
// const myArray = ["Hello", "catt", "dog", "lion"];

// function isLength3(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

const users = [
    {userId : 1, userName: "harshit"},
    {userId : 2, userName: "harsh"},
    {userId : 3, userName: "nitish"},
    {userId : 4, userName: "mohit"},
    {userId : 5, userName: "aaditya"},
];

// const myUser=users.find((user)=>{
//     return user.userId===3;
//     });


const myUser = users.find((user)=>user.userId===3);
console.log(myUser);