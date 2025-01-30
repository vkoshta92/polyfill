// function findDuplicates(arr) {
//     //let duplicates = [];// [1,2,3]
//     let seen = {};
// //   seen = {
// //     1: true,
// // 2: true,
// // 3: true
// //   }
//     for (let i = 0; i < arr.length; i++) {
//       if (!seen[arr[i]]) {
//         seen[arr[i]] = true;
//        // duplicates.push(arr[i]);

//      }
//     }
  
//     return Object.keys(seen).map(num=>parseInt(num));
// //    return duplicates;
//   }

//   const result = findDuplicates([1,1,2,3,3,4,4,5,5,6,6])
//   console.log(result);


// other
 function findDuplicates(arr) {
    let duplicates = [];// [1,2,3]
    let seen = {};
//   seen = {
//     1: true,
// 2: true,
// 3: true
//   }
    for (let i = 0; i < arr.length; i++) {
      if (!seen[arr[i]]) {
        seen[arr[i]] = true;
     }
     else  {
      // if (!duplicates.includes(arr[i])){
        duplicates.push(arr[i]);
      // }
     }
    }
    console.log(duplicates);


const see= {};

//[1,1,3,4,5,6,6,6]
    for (let i = 0; i < duplicates.length; i++) {
      if (!see[duplicates[i]]) {
        see[duplicates[i]] = true;
     }
   
    }
     return Object.keys(see).map(num=>parseInt(num));
// return duplicates;
  
}
  const result = findDuplicates([1,1,1,2,3,3,4,4,5,5,6,6,6,6])
  console.log(result);







  //...............................set method

// function unique(array){
// let duplicate=[];
// let set= new Set();
// for (let number of array){
//     if (set.has(number)){
//         duplicate.push(number)
//     }
//     else {
//         set.add(number)
//     }
// }  
// return duplicate; 
// }

// const result= unique([1,1,2,3,3,4,4,5,5,6,6]);
// console.log(result);



















// function findDuplicates(nums) {
//     let duplicates = [];
//     let uniqueNums = new Set();
  
//     for (let num of nums) {
//       if (uniqueNums.has(num)) {
//         duplicates.push(num);
//       } else {
//         uniqueNums.add(num);
//       }
//     }
  
//     return duplicates;
//   }

  
//   const result = findDuplicates([1,1,2,3,3,4,4,5,5,6,6])
//   console.log(result);



// ............................next method

// function removeDuplicates(arr) {
//     let uniqueArr = [];
    
//     // loop through the input array
//     for(let i = 0; i < arr.length; i++) {
      
//       // check if the current element is already in the uniqueArr
//       if(uniqueArr.indexOf(arr[i]) === -1) {
//         uniqueArr.push(arr[i]);
//       }
//     }
    
//     return uniqueArr;
//   }
//   const myArr = [1, 2, 3, 3, 4, 4, 5];
//   const uniqueArr = removeDuplicates(myArr);
  
//   console.log(uniqueArr); // [1, 2, 3, 4, 5]

  
    
// ..........................next method

// function findDuplicates(arr) {
//   let duplicates = [];// [1,2,3]
//   let seen = {};
  
//   seen = {
//     1: true,
// 2: true,
// 3: true
//   }
  // for (let i = 0; i < arr.length; i++) {
  //   if (!seen[arr[i]]) {
  //     seen[arr[i]] = 1;
  //     console.log(seen);
  //    duplicates.push(arr[i]);

  //  }
  //  else{
  //   seen[arr[i]] +=1

  //  }
  // }

  // return Object.keys(seen).map(num=>parseInt(num));
// return duplicates;
// for (key in seen){
//   if (seen[key]>1){
//     duplicates.push(key)
//   }
//   return duplicates
// }


// }
// const result = findDuplicates([1,1,2,3,3,4,4,5,5,6,6])
// console.log(result);