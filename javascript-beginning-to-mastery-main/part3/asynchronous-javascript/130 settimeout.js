// synchronous programming vs asynchronous programming
// synchronous programming
// synchronous programming single threaded
// console.log("script start");

// for (let i = 1; i < 10000; i++) {
//   console.log("inside for loop");
// }

// console.log("script end");

// setTimeout

console.log("script start");

// set timeout browser privide krta hai. js nhi, isliye settimeout vla set sabse akhri me execute hoga.
// kyoki settimeout vle ko callbak que me bhej dega aur phir eventloop use rokega, jb tk js vle sre km calstack me na ho jae . uske bd jab callstack me kuh js vla km nhi higa tb settieout run hoga.
// settimeout return me ak id deta hai.
const id = setTimeout(() => {
  console.log("inside setTimeout");
}, 1000);

for (let i = 1; i < 100; i++) {
  console.log("....");
}
console.log("settimeout id is ", id);
console.log("clearing time out");
// cleartimeout se timeout vla run nhi hoga kyoki id di h vo id se smgh jega kis timeout ko run nhi hona hai.
clearTimeout(id);
console.log("Script end");
