const inputValue = document.querySelector("#inputValue");
const mainTodoElem = document.querySelector(".todo-list-elem");


// ! Step 5 
const getTodoList=()=>{
    return JSON.parse(localStorage.getItem("amanTodo"));
};

const addTodoListLocalStorage = () =>{
    return localStorage.setItem("amanTodo", JSON.stringify(localTodoLists));
}

let localTodoLists = getTodoList() || [];   // an empty array to store the data of todo

// adding add to list dynamically
const addTodoDynamicElement = (currElem) =>{
    const divElem = document.createElement("div");
    divElem.className = "main_todo_div";
    divElem.innerHTML=`<li>${currElem}</li>   <button class ="deletebtn">Delete</button>`
    mainTodoElem.append(divElem);
    inputValue.value = "";
};

const addTodoList = (e) =>{
    e.preventDefault();
    // console.log("hii");
    // console.log(inputValue.value);


    // !Step 4 
    const todoListValue = inputValue.value.trim();  // to remove all the white spaces
    
    inputValue.value = "";
    // add data only when the array dont includes that data
    if(todoListValue != "" && !localTodoLists.includes(todoListValue)){
        localTodoLists.push(todoListValue);   // adding the value to the array  but array can include the duplicate elements so we are going to use Set
        localTodoLists = [...(new Set(localTodoLists))];
        console.log(localTodoLists);

        localStorage.setItem("amanTodo", JSON.stringify(localTodoLists));

        // const divElem = document.createElement("div");
        // divElem.className = "main_todo_div"; // Add the class name to the div
        // // divElem.classList.add("main-todo-div");    // we can do this also...
    
        // // // Create an input element
        // // let inputElem = document.createElement("input");
        // // // Create a button element
        // // let buttonElem = document.createElement("button");
        // // buttonElem.textContent = "Delete"; // Set the text of the button (or any other content)
        // // // Append the input and button to the div
        // // dElem.appendChild(inputElem);
        // // dElem.appendChild(buttonElem);

        // // ! we can use ans easy step i.e. use inner html to add the html directly 
        // divElem.innerHTML=`<li>${inputValue.value}</li>   <button class ="deletebtn">Delete</button>`
        // mainTodoElem.append(divElem);
        // we can directly use the function here which is addTodoDynamicElement(currElem);
        // here in place of currElem we are  passing the todoListValue which is hte value after the trim...
        addTodoDynamicElement(todoListValue);
    }


};

const showTodoList = ()=>{
    console.log(localTodoLists);
    localTodoLists.forEach((currElem) => {
        addTodoDynamicElement(currElem);
    });
}

showTodoList();

// remove the data 
const removeTodoElem = (e) => {
    const todoToRemove = e.target;
    let todoListContent = todoToRemove.previousElementSibling.innerText;
    
    let parentElem = todoToRemove.parentElement;

    localTodoLists = localTodoLists.filter((currTodo) =>{
        return currTodo != todoListContent.toLowerCase();
    });

    addTodoListLocalStorage(localTodoLists);
    parentElem.remove();
}

mainTodoElem.addEventListener("click", (e) =>{
    e.preventDefault();
    //  we are getting that we are clickig anywhere in the box of the list items , the element got deleted 
    if(e.target.classList.contains("deletebtn")) {
       removeTodoElem(e);

    }
});

const handleBtn = (e) =>{
    addTodoList(e);
};


document.querySelector(".btn").addEventListener("click" , handleBtn);
