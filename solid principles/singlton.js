// https://www.youtube.com/watch?v=xDp10rpSMuQ
class Attendence {


    constructor(){
        if(!Attendence.instance){
            this.value= "i am vishnu"
            Attendence.instance= this
        }
        return Attendence.instance
    }
    output(){
        console.log(this.value);
    }
}

const obj1= new Attendence();
const obj2= new Attendence();

console.log(obj1==obj2);