// https://lodash.com/docs/4.17.15#throttle

const btn= document.querySelector(".increment_btn");
const btnPress= document.querySelector(".increment_pressed");
const count= document.querySelector(".increment_count")

var pressdCount=0;
var triggerCount=0;



const myThrottle=(cb,d)=>{
    let last=0;

    return ((...arg)=>{
let now= new Date().getTime();
if(now-last<d) return;

else{
    last= now;
    return cb(...arg)
}
    })
}


// throttling me 800 sec ke bd hi increse hoga , debounce me mouse rokne ke bad hota tha.
const throttle=myThrottle(()=>{
    
 
    count.innerHTML=++triggerCount;
},1000)


btn.addEventListener("click",()=>{
    btnPress.innerHTML= ++pressdCount;
    throttle();
})


