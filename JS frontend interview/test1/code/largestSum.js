function findLargestNumber(array,num){
    if(num>array.length){
        throw new Error("number is exceed");
    }

    else{
        let max=0;
        for(let i=0;i<array.length-num+1;i++){
            let tempSum=0;
            for (let j=0;j<num;j++){
                tempSum=tempSum+array[i+j];
            }
            if(tempSum>max){
                max=tempSum
            }
        }
        return max;
    }
}

const result= findLargestNumber([1,2,3,4,5,6,7,8],4)
console.log(result);
