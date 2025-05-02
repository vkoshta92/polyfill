// super 
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

// animal me speed nhi mila to khuf ka constructer bnya hai.
class Dog extends Animal{
    constructor(name, age, speed){
        // animal class ko hm super  keyword bhi bol skte hai, super ko parent jo bhi ho uske bdle use kr skte hai.
        super(name,age);
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }
} 
// object / instance 
const tommy = new Dog("tommy", 3,45);
console.log(tommy.run());
