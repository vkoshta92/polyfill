
var arr = [1,2,3,4,5,5,5,7,10,20,20,20]
var arr2=[]

for(let i = 0; i<arr.length; i++){
    for(let j = arr.length; j>i+1; j--){
        if(arr[i]==arr[j]  ){
            arr2.push(arr[j])

        }
      
    }   
   
}

console.log(arr2)



// var num = [1,2,3,4,5] 
// var sum = 7
// var ans=[]

// for(let i =0 ; i<num.length; i++ ){
//     for(let j =i+1 ; j<=num.length; j++){
//         if(num[i]+num[j]==sum){
//               ans.push([num[i],num[j]])
//         }
//     }
// }

// console.log(ans)



















