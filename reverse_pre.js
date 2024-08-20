     
function reverseString(str){
 
    let storeValue=str.split(" ") // retern array
    
    let reverseData=storeValue.reverse(); // return array
    
    let finalData= reverseData.join(" ");
     return finalData; // return  string 
    }
    let str="I Love Myg";
    
    
    let strFunction= reverseString(str);
    
    console.log(strFunction);