Array.prototype.reducePolyfill= function(cb,initialValue){
var accumlator = initialValue;
for(let i=0;i<this.length;i++){
    accumlator= accumlator?cb(accumlator,this[i],i,this):this[i]; //acc array ki  value ho jega initial value na ho to.
}
return accumlator;
}

const num= [1,2,3,4,5];
const sum= num.reducePolyfill((acc,curr,i,arr)=>{
return acc+curr;
})
console.log(sum);