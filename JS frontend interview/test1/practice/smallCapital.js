// Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// function swapCase(str) {
//     var newStr = "";
//     for (var i = 0; i < str.length; i++) {
//       var char = str.charAt(i);
//       if (char === char.toUpperCase()) {
//         newStr += char.toLowerCase();
//       } else {
//         newStr += char.toUpperCase();
//       }
//     }
//     return newStr;
//   }
  
//   var inputStr = "The Quick Brown Fox";
//   var outputStr = swapCase(inputStr);
//   console.log(outputStr);



function swap(string){
let newString="";
 for (let i=0; i<string.length;i++){
  let char= string.charAt(i);
  // console.log(char);
  if (char===char.toUpperCase()){
    newString +=char.toLowerCase();
  }
  else{
    newString +=char.toUpperCase();
  }
 }
return newString;
}
  
const result= swap("The Quick Brown Fox");
console.log(result);
