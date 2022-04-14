// MVP -> MINIMUM VIABLE PRODUCT
// TODO
// FORM WITH INPUTS : DONE
// HTML - 15 MINS
// - MVP - TITLE -> TITLE OF TODO
// - MVP - DESCRIPTION -> WHAT DO YOU NEED TO DO?
// - MVP - WHO THE TODO IS FOR -> NAME

// CAPTURE THE VALUES FROM THE INPUTS
// WHEN THE FORM IS SUBMITTED

// "" '' ``
// - GET HTML ELEMENTS -> GET ELEMENT BY ID
const todoForm = document.getElementById("todo-form");
const todoTitle = document.getElementById("todo-title");
const todoDescription = document.getElementById("todo-description");
const todoAssigned = document.getElementById("todo-assigned");
const todos = document.getElementById("todos");

const todoList = [];

// DEFINE A TODO CLASS FIRST
// - PROPERTIES -> TITLE, DESCRIPTION, ASSIGNED TO
class Todo {
  constructor(title, description, assignedTo, targetHTML) {
    this.title = title;
    this.description = description;
    this.assignedTo = assignedTo;
    this.targetHTML = targetHTML;
    // this.completed = false;
  }
  // METHOD TO ADD TO THE PAGE
  renderToPage() {
    this.targetHTML.innerHTML += `
    <div class="todo">
        <h3>${this.title}</h3>
        <p>${this.description}</p>
        <p>${this.assignedTo}</p>
    </div>
    `;
  }
}

// - EVENT LISTENERS -> CLICK? SUBMIT?
todoForm.addEventListener("submit", event => {
  event.preventDefault();
  // - SHOW THE VALUES -> SO WE KNOW WE HAVE THEM
  // HTML ELEMENTS AS AN OBJECT USE CONSOLE.DIR() OR CONSOLE.LOG({ OBJ })

  // CREATE AN OBJECT WITH THE TODO CLASS USING THE VALUES FROM THE FORM
  const newTodo = new Todo(todoTitle.value, todoDescription.value, todoAssigned.value, todos);

  todoList.push(newTodo);

  todos.innerHTML = "";

  todoList.forEach(item => {
    item.renderToPage();
  });
});

// GET OBJECT ONTO THE DOM

// - STATUS?
// - COMPLETED BY?

// ARRAY
// -> COLLECTION OF SIMILAR THINGS
// -> COLLECTION OF TODOS
// -> ITERATE / LOOP THROUGH THE ITEMS

// map, filter
// reduce function

const scores = [1, 2, 3, 4, 5];
// 1st accumulator / total
// 2nd current / item in the array
scores.reduce((total, currentNumber) => {
  console.log(total, currentNumber);
  return total + currentNumber;
}, 10);
