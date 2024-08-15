# ToDo List 
<hr>
“Fed up with forgetting tasks? This is my todo list project designed to keep you on track and remind you of your work efficiently.”
<hr>
<b>Live Deployment:</b> Check out the live version here!  https://agrawalaman02.github.io/todoList/

<hr>
---

## Creating a Basic Todo List with Local Storage

These are the steps I followed to make this project:

### 1. HTML Structure
- Create an HTML structure with an input field, a button, and a container to hold the todo items.
- Add a class to the container (e.g., `todo-lists-elem`).

### 2. JavaScript Setup
- Select the necessary DOM elements and store references (e.g., `mainTodoElem` and `inputValue`).

### 3. Add Click Event
- Add a click event listener to the "Add Todo" button (`btn`).
- In the event listener, call a function (e.g., `addTodoList`) to handle adding a new todo.

### 4. Add Todo Function
- In the `addTodoList` function, prevent the default form submission.
- Create a new todo element (e.g., a div with a class `main_todo_div`) with the input value and a delete button.
- Append the new todo element to the container (`mainTodoElem`).
- Store the todo data in an array (`localTodoLists`) and update Local Storage using `localStorage.setItem`.

### 5. Get Todo from Local Storage
- Create a function (e.g., `getTodoListFromLocal`) to retrieve todo data from Local Storage using `localStorage.getItem`.
- Use `JSON.parse` to convert the stored string into an array.

### 6. Show Todos
- Create a function (e.g., `showTodoList`) to display todos on page load.
- Retrieve todo data from Local Storage using `getTodoListFromLocal`.
- Iterate through the array and dynamically add todos to the container.

### 7. Remove Todo Function
- Create a function (e.g., `removeTodoList`) to remove a todo.
- Add a click event listener to the remove button.
- Get the index of the todo to be removed.
- Remove the todo from the `localTodoLists` array.
- Update Local Storage.
- Remove the corresponding HTML element.

### 8. Update Local Storage on Remove
- In the `removeTodo` function, update the `localTodoLists` array by filtering out the removed todo.
- Update Local Storage using `localStorage.setItem`.

---
<b>Note:</b> This project is a work in progress and will receive further updates and improvements.
**Further Updates:** This project will continue to evolve with new features and improvements. Stay tuned for more updates!
