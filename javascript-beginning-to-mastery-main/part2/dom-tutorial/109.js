// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll
// array like object ---> indexing, length property 
// let navItems = document.getElementsByTagName("a"); // HTMLCollection
// console.log(navItems);
// we can't use forEach method to iterate through HTMLCollection
// simple for loop 
// for of loop 
// forEach 

// for(let i=0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";

// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }


// html collection ke sth foreach loop nhi use kr skte  hai, usko phle array banna pdega. 
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })

// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item"); // NodeList
// console.log(navItems[1]);


// node list me sare loop use kr skte hai.
// let navItems = document.querySelectorAll("a");

// node items ko array me ase bana skte hai.
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// simple for loop 
// for of loop 
// forEach 
// for(let i=0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";

// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })
// console.log(navItems);




// practice

// get multiple elememnts using getElements by class name//HTML COLLECTION
// get multiple elements items using querySelectorAll
// array like objet- indexing , length property
let navItems=document.getElementsByTagName("a");// html collection.
console.log(navItems);

// for(let i=0;i<navItems.length;i++){
// console.log(navItems[i]);
// const navItem=navItems[i];
// navItem.style.backgroundColor="#fff";
// navItem.style.color="green"
// navItem.style.fontWeight="bold";
// }

// for (let navItem of navItems){
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="red";
//     navItem.style.fontWeight="bold";

// }

// node list  and html ko array bannae ke liye
navItems=Array.from(navItems);
console.log(Array.isArray(navItems));
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="green";
//     navItem.style.fontWeight="bold";
// })


const navItems1=document.querySelectorAll(".nav-item")// node list
console.log(navItems1[1]);
console.log(Array.isArray(navItems1));
navItems2=Array.from(navItems1);
console.log(Array.isArray(navItems2));






