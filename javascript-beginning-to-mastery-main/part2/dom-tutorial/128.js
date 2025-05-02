// console.log("hello world");

const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// agr aprrent  pe lagenge to aur child pr lga h to child pe click krenge to parent pe auto matic hoga , ase hi grandparent pe auto matic click hoga parent pe lagenge.ase hi body pe hoga.
// child.addEventListener("click",()=>{
//     console.log("you clicked on child")
// });

// parent.addEventListener("click",()=>{
//     console.log("you clicked on parent")
// });

// grandparent.addEventListener("click",()=>{
//     console.log("you clicked on grandparent")
// });

// document.body.addEventListener("click",()=>{
//     console.log("you clicked on body")
// });


// pahle capture hoga phir bubble hoga right se left

// capturing events
// child.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! child");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! parent");
//   },
//   true
// );
// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! grandparent");
//   },
//   true
// );
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! document.body");
//   },
//   true
// );

///// not capture

// child.addEventListener("click", () => {
//   console.log("bubble child");
// });
// parent.addEventListener("click", () => {
//   console.log("bubble parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("bubble grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("bubble document.body");
// });

// event delegation
// grandparent.addEventListener("click", (e) => {
//   console.log(e.target);
// });


// event deligation
// child  parent grand parent spbke liye event add krnr ki jrurat nhi  hai.
// event ek pe lgya h work sbpe krega.
grandparent.addEventListener("click",(e)=>{
console.log(e.target.textContent)
});




// ecent bubbling/propogation--agr kisi chid ke parent pr koi event lga hto child pe chick krne pr usa prent bhi click o jega,