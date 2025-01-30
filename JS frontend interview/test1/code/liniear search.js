//
const users=[
    {username:"vishnu",age:"30"},
    {username:"krishna", age:"30"},
    {username:"physics",age:30}
]

function isUserExit(array,value){
    for(let items of array){
        if (items["username"]===value){
            return true;
        }
    }
    return false;
}
const result=isUserExit(users,"krishna");
console.log(result);
