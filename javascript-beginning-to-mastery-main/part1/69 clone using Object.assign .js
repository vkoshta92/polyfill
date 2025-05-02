// clone using Object.assign 

// memory  heap ki vgh se dono me ak sath add hota h bina clone ke.

const obj = {
    key1: "value1",
    key2: "value2"
}

// const obj2={...obj}
// const obj2=Object.assign({},obj)
// obj.key3="value3"
// console.log(obj);
// console.log(obj2);


// const obj2 = {'key69': "value69",...obj};
// other methof for cloning.
const obj2 = Object.assign({'key69': "value69"}, obj);
obj.key3 = "value3";
console.log(obj);
console.log(obj2);

