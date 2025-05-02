// static methods and properties
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return 'this is person class';
    }

// static ko direct object se call nhi kr skte hai.
    // static classInfo(){
    //     return 'this is person class';
    // }

    static desc = "static property";

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat(){
        return `${this.firstName} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

const person1 = new Person("harshit", "sharma", 8);
// // console.log(person1.eat());
// is method ko hm class se hi call krenge object bannae ki jarurat nhi hai(person1.classInfo()) is trh ise nhi use krenge.
// const info = Person.classInfo();
// desc me person 1 use nhi kr te hai.

// console.log(Person.desc);
// console.log(info);