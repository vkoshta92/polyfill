// function anagram(str1,str2){
// let obj={}
//     if(str1.length !==str2.length)
//         return false;
//     for (ch of str1){
//         obj[ch]= (obj[ch] || 0)+1;
//         console.log(obj);

//     }
//     console.log(str1)
//     for(ch of str2){
//         if(!obj[ch]){
//             return false;
//         }
//         obj[ch]--;
//         console.log("obj2",obj);

//     }
//     return true

// }

// console.log(anagram("india","paris"));




function anagram(str1, str2) {
  let obj1 = {};
  let obj2 = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (ch of str1) {
    obj1[ch] = (obj1[ch] || 0) + 1;
    console.log(obj1);
  }
  for (ch of str2) {
    obj2[ch] = (obj2[ch] || 0) + 1;
    console.log(obj2);
  }

  let keys1= Object.keys(obj1);
  let keys2= Object.keys(obj2);

  if(keys1.length!== keys2.length){
    return false;

  }
  return keys1.every((key)=>obj1[key]===obj2[key]);
}
console.log(anagram("india", "diain"));
