const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  // prevent default page ko refresh krne se rokega.jb hm text me kuch dal ke add krenge.
  e.preventDefault();
  // console.log(todoInput.value)
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi);
  todoInput.value = "";
});
// event deligation use hoga yah par.

// todoList.addEventListener("click", (e) => {
//   console.log(e.target);
// });


todoList.addEventListener("click", (e) => {
  // check if user clicked on done button
  if (e.target.classList.contains("remove")) {
    // remove ke parent ka parent  li hoga puri li remove kr dega.
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
  if (e.target.classList.contains("done")) {
    // done vale ke parent ka previus sibling span vala hoga use ye cut kr dega.
    const liSpan = e.target.parentNode.previousElementSibling;
    // jo km ho jega vo kt jega line through se
    liSpan.style.textDecoration = "line-through";
  }
});
