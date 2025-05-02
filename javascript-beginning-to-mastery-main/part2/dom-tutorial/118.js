// static list vs live list
// query selector hme static list degi , getelementbysomthing hme live list degi , mtln jo console me hoga vhi dom me hoga.


const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";

ul.append(sixthLi);
console.log(listItems);