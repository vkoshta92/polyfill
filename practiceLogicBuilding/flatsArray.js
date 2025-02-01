// function flatArray(arr) {
//   let tempArr = [];
//   arr.forEach((el) => {
//     if (Array.isArray(el)) {
//         tempArr=tempArr.concat(flatArray(el));
//     }
//     else{
//      tempArr= tempArr.concat(el);

//     }
    
//   });
//   return tempArr;
// }

// let arr= [1,2,[3,4,1,[5,3,2]]];
// let result= flatArray(arr);
// console.log(result);


function flatArray(arr) {
    let tempArr = [];
    arr.forEach((el) => {
      if (Array.isArray(el)) {
          tempArr.push(...flatArray(el));
      }
      else{
       tempArr.push(el);
  
      }
      
    });
    return tempArr;
  }
  
  let arr= [1,2,[3,4,1,[5,3,2]]];
  let result= flatArray(arr);
  console.log(result);
  