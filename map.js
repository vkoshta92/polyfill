// polyfils of map

// Array.map((num,i,arr)=>{

// })

Array.prototype.myMapFunction = function (cb){

    let temp=[];
    for (let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this))
    }
    return temp;

}

const nums=[1,2,3,4];
const mul= nums.myMapFunction((num,i,arr)=>{
return num*3;
})
console.log(mul);


