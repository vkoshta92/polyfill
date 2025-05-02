const obj1 = {
    key1: "value1",
    key2: "value2"
}

// __proto__

// offical ecmascript documentation 

// [[prototype]]

// __proto__ , [[prototype]]- both same , ise dunder bhi khte hai.



// prototype    

// is method se obj1 ki value ko print kra skte hai.
const obj2 = Object.create(obj1); // {}
// there is one more way to create empty object
obj2.key3 = "value3";
// js phle key2 ko obj2 me dekhega nho mila to 1 me dekhega.
// obj2.key2 = "unique";
// console.log(obj2.key2);
console.log(obj2);


// proto vhi obj1 bn jega aur yhi proto console me aa rha h , agae obj 2 me value nhi mili to isi proto ki madad se ye value ko find krega. obj1 me.
// dunder
console.log(obj2.__proto__);

