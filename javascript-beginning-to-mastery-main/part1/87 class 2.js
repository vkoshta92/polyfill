class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}


// const animal1=new Animal("tom",2);
// console.log(animal1)
// // sare method ko return kr skte hai.
// console.log(animal1.eat())
// console.log(animal1.cute())
// console.log(animal1.isSupercute())


// dog ki class banani nhi pdegi iski madad se dog class bn jegi  , cat ke sre method and property vha se inherite kr lega.
// animal parent class, dog subclass or drived class.
class Dog extends Animal{
    
} 

// dog class
// class Dog{
//     constructor(name,age){
//         eat(){
//             return `${this.name} is eating`;
//         }
    
//         isSuperCute(){
//             return this.age <= 1;
//         }
    
//         isCute(){
//             return true;
//         }
//     }
// }


// animal class ka constructer use hoga agr dog e nhi h to.
const tommy = new Dog("tommy", 3);
console.log(tommy);
console.log(tommy.isCute());
// console.log(tommy.eat())
