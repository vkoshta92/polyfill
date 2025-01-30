// debounce polyfill implementation

const btn= document.querySelector(".increment_btn");
const btnPress= document.querySelector(".increment_pressed");
const count= document.querySelector(".increment_count")

var pressdCount=0;
var triggerCount=0;

const myDebounce=(cb,d)=>{
    let timer;

    return function(...args){
        if(timer)  clearTimeout(timer);
       timer= setTimeout(()=>{
cb(...args);
       },d)
    };
}


const debounceCount=myDebounce(()=>{
    triggerCount+=1;
    count.innerHTML=triggerCount;
},600)


btn.addEventListener("click",()=>{
    btnPress.innerHTML= ++pressdCount;
    debounceCount();
})

