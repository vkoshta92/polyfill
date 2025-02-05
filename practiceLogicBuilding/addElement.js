

function addElement(arr,position,value){
    console.log('old array',arr);
        for (let i=arr.length-1;i>=position;i--){
            arr[i+1]=arr[i];
        }
        arr[position]=value;
        return arr;
    
    }
    
    
    let arr = [1, 2, 3, 4, 5, 7, 8, 9];
    let position = 4;
    let value = 0;
    
    console.log(addElement(arr, position, value));