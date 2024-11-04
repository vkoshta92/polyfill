

Array.prototype.myFilter=  function(cb){
    let temp=[]
    for(let i=0;i<this.length;i++){
if(cb(this[i],i,this)){
    temp.push(this[i])
}

    }
    return temp;
}

let myArr=[1,2,3,4,5];

let filteredarray= myArr.myFilter((num)=>{
    return num>2;
})
console.log(filteredarray);