

Array.prototype.filterPolyfill= function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
             temp.push(this[i]);
        }
    }
    return temp;
}

let arr=[5,1,2,3,4];

const moreThanTwo= arr.filterPolyfill((num)=>{
    return num>2;
})
console.log(moreThanTwo);