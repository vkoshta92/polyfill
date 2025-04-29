function identity <T>(value:T){
    return value;
}


const mydata= identity <String> ("hello")
const ans= identity<Number> (1234)


console.log(mydata)
console.log(ans)