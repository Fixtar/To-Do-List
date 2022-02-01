const inputToDo = document.getElementById('inputToDo');
const inputButton = document.getElementById("inputButton");
const todoListBox = document.getElementById('todoListBox');

const todoKey = "todos";
let toDoList = [];

function savetoDoList() {
    localStorage.setItem(todoKey, JSON.stringify(toDoList));
}

const savedtodoList = localStorage.getItem(todoKey);
if (savedtodoList !== null) {
    toDoList = JSON.parse(savedtodoList);
    toDoList.forEach(element => {
        addtoDo(element)
    });
}
function deletetoDoList(event) {
    const removeli = event.target.parentElement;
    removeli.remove();
    const removeid = removeli.id;
    toDoList = toDoList.filter((todo) => todo.id !== parseInt(removeid));
    savetoDoList();
}


function addtoDo(newTodo) {
    const litag = document.createElement('li');
    litag.id = newTodo.id;
    litag.className += 'litagstyle';
    const spantag = document.createElement('span');
    spantag.className += 'listcontent';
    const deleteButton = document.createElement('button');
    deleteButton.addEventListener('click', deletetoDoList);
    deleteButton.className += 'Buttons';

    spantag.innerText = newTodo.text;
    deleteButton.innerText = "삭제";

    litag.appendChild(spantag);
    litag.appendChild(deleteButton);
    todoListBox.appendChild(litag);
}

function submithandle(event) {
    event.preventDefault();
    const inputToDoValue = inputToDo.value;
    inputToDo.value = "";
    const newTodoObject = {
        text: inputToDoValue,
        id: Date.now(),
    }

    toDoList.push(newTodoObject);
    addtoDo(newTodoObject);
    savetoDoList();
}

inputButton.addEventListener("click", submithandle);