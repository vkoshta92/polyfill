let car1={
    color:"Red",
    company:"Farari"
}

function purchaseCar(currency,price){
    console.log(`i have purchased ${this.color}- ${this.company} car for ${currency} ${price}`);
}
// purchaseCar.call(car1,"rs",5000)


Function.prototype.myApply= function(context={},args=[]){
    if(typeof this!== "function"){
        throw new Error(this+"it is not callable");
    }
    if(!Array.isArray(args)){
        throw new TypeError("createlistfromarraylike called on non-object")
    }
context.fn=this;
context.fn(...args);
}
purchaseCar.myApply(car1,["rs",55000])