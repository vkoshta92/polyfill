const btn= document.querySelector(".increment_btn");
const btnPress= document.querySelector(".increment_pressed");
const count= document.querySelector(".increment_count")

var pressdCount=0;
var triggerCount=0;




const debounceCount=_.debounce(()=>{
    count.innerHTML=++triggerCount;
},800)
// isse tb  itne time bad hi count hoga triggered and jb hm click krna rojenge tb  hr bar add nhi higa usm

btn.addEventListener("click",()=>{
    btnPress.innerHTML= ++pressdCount;
    debounceCount();
})
//https://lodash.com/docs/4.17.15#debounce

