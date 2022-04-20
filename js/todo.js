const todo = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
todoForm.addEventListener('submit', saveTodoLs);
//document.addEventListener('submit', saveTodoLs);

function saveTodoLs(el){
    el.preventDefault();
    const key = localStorage.length;
    localStorage.setItem(`todo${key}`, todo.value);
    todo.value = '';
}

function paintTodoLs(){
    
}
let todoItem = '';
let li = '';
if(localStorage.length > 0){
    for(let i = 0;i <localStorage.length ;i++){
        todoItem = localStorage.getItem(`todo${i}`);
        if(todoItem){
           li = document.createElement('li');
           li.innerHTML = todoItem;
            todoList.appendChild(li);
        }
    }
}