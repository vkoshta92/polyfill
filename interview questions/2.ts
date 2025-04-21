class Box <T>{
    content:T;
    constructor(value:T){
        this.content= value;
    }
}   


const ans1= new Box <String>("Vishnu");
const ans2= new Box <number>(123)

console.log(`string:-${ans1}`);
console.log(`Number:-${ans2}`)




