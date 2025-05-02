// getter and setters 
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("harshit", "sharma", 5);
// console.log(person1.fullName());

// get use kiya hai, fullname ko as property use kr skte ha, () jarurt hi nhi h dono ka same result ayega.
// console.log(person1.fullName);
// setter method ki vgh se person1 print krenge to mohit vasista print kra dega
// person1.fullName = "mohit vashistha";
// console.log(person1);




// ak is trike se bhi set name krke  name print kra skte hai.
// console.setName("mohit","vashistha")
// console.log(person1.firstName)
// console.log(person1.lastName)

// ak  is trike  se bi kr skte hai.
// person1.firstName="mohit"
// perspn1.lastName="vasishta"
