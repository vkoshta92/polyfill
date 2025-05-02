// splice method 
// start , delete , insert 

const myArray = ['item1', 'item2', 'item3'];

// delete
// 1 index se strt hoke 1 item delete krna hai.
// deleted item ko print bhi kra skte h console me kya delete kiya hai
// const deletedItem = myArray.splice(1, 2);
// console.log("delted item", deletedItem);

// first index se strt hoke 0 item delete krne hai aur ak item insert krna hai.

// insert 
// myArray.splice(1, 0,'inserted item');

// insert and delete 
const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2","vishnu")
console.log("delted item", deletedItem);
console.log(myArray);