
// all pairs of when sum num find.

function findSumPair(array,num){
    let left=0;
    let right=array.length-1;
    while(left<right){
        sum=array[left]+array[right];
        if (sum===num){
            return [array[left],array[right]]
        }
        else if (sum>num){
            right--;
        }
        else {
            left ++;
        }
    }
 }

 const result= findSumPair([-5,-4,-3,-2,0,2,4,6,8],5);
 console.log(result);


//  function getSumPair(array,nums){
//     array=[];
//     for(let number of array){
//      for (let j =1; j<array.length;j++){
//          if(number+array[j]===nums){
//              return [number,array[j]]
//          }
//      }
//     }
//  }

//  const result= getSumPair([1,2,3,4,5],5);
//  console.log(result);









