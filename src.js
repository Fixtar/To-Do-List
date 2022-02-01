const inputToDo = document.getElementById('inputToDo');
const inputButton = document.getElementById("inputButton");
const todoListBox = document.getElementById('todoListBox');

function addtoDo(newTodo) {
    const litag = document.createElement('li');
    litag.className += 'litagstyle';
    const spantag = document.createElement('span');
    spantag.className += 'listcontent';
    const deleteButton = document.createElement('button');
    deleteButton.className += 'Buttons';

    spantag.innerText = newTodo;
    deleteButton.innerText = "삭제";

    litag.appendChild(spantag);
    litag.appendChild(deleteButton);
    todoListBox.appendChild(litag);
}

function submithandle(event) {
    event.preventDefault();
    const inputToDoValue = inputToDo.value;
    addtoDo(inputToDoValue);
}

inputButton.addEventListener("click", submithandle);