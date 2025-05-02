// this keyword
const btn = document.querySelector(".btn-headline");

btn.addEventListener("click",function(){
    console.log("you clicked me !!!!");
    console.log("value of this")
    // function che  bhr bnao che andr this i vgh se button hi dikhega console me, arrow function me wijdow ayega console me.
    console.log(this);
});