function factorial(num){
    if(num === 0 && 1){
        return 1;
    }
    return num* factorial(num-1)
}
const result=factorial(10);
console.log(result);