// https://lodash.com/docs/4.17.15#throttle

const btn= document.querySelector(".increment_btn");
const btnPress= document.querySelector(".increment_pressed");
const count= document.querySelector(".increment_count")

var pressdCount=0;
var triggerCount=0;

const start= new Date().getTime();

// throttling me 800 sec ke bd hi increse hoga , debounce me mouse rokne ke bad hota tha.
const throttleCount=_.throttle(()=>{
    const now= new Date().getTime();
    console.log(now-start);
    count.innerHTML=++triggerCount;
},2000)


btn.addEventListener("click",()=>{
    btnPress.innerHTML= ++pressdCount;
    throttleCount();
})


