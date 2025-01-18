function pald(data){
    let start=0;
    let end= data.length-1;
    // isPal= true;
    while(end>start){
        if(data[start]!=data[end]){
            // isPal=false;
            console.log('it is not palandrome number');
            return;
        }
        
        start++;
        end--;
    }
    // return isPal;
    console.log('it is a palendrome number');
}

const data= "level";
pald(data);
// console.log(result);