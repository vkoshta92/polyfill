// difference between dot and bracket notaion
const key = "email";
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]

}
// single use krna ho to . use krenge  ke 2  word ki ho to bracket use krenge.
console.log(person.name)
console.log(person["person hobbies"]);
person[key] = "harshitvashisth@gmail.com";
console.log(person);
