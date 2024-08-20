// polyfils of map

// Array.map((num,i,arr)=>{

// })

Array.prototype.mapPolyfill= function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this));
    }
    return temp;
}

let arr=[1,2,3,4];
const multiplyThree= arr.mapPolyfill((num,i ,arr)=>{
    return num*3;
})
console.log(multiplyThree);