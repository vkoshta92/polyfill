// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll
// const navItems = document.getElementsByClassName("nav-item"); // HTMLCollection
// console.log(navItems);
// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item"); // NodeList
// console.log(navItems[1]);


// practice

// const navItems=document.getElementsByClassName("nav-items"); // HTML COLLECTION
// console.log(navItems);
// console.log(Array.isArray(navItems));
const navItems=document.querySelectorAll(".nav-items");
console.log(navItems); // nodeList , ye array like hota h par array nhi hota hai.
console.log(Array.isArray(navItems));

