const todo = document.querySelector('#todo-form input');
const todoForm = document.querySelector('#todo-form');
todoForm.addEventListener('submit', handleTodoSubmit);
const todoList = document.querySelector('#todo-list');

const todoArr = [];

function handleTodoSubmit(event){
    event.preventDefault();    
    paintTodo(todo.value);
    todoArr.push(todo.value);
    saveTodos();
    todo.value = '';
}

function saveTodos(){
    localStorage.setItem("todos",JSON.stringify(todoArr));
}
function loadTodos(){
    const tmpTodos = localStorage.getItem("todos");
    if(tmpTodos){
        const parsedTodos = JSON.parse(tmpTodos);
        parsedTodos.forEach(function(item){

        });
    }
}
function paintTodo(newTodo){
    const li = document.createElement('li');
    li.innerHTML = newTodo;
    const button = document.createElement('button');
    button.innerHTML = 'X';
    button.addEventListener('click', removeTodo);
    li.append(button);
    todoList.appendChild(li);
}

function removeTodo(event){
    event.target.parentElement.remove();
}
/*
function paintTodoLs(){
    clearTodoLs();
    todoArr.forEach(function(el,index){
        let li = document.createElement('li');
        li.innerHTML = el;
        let button = document.createElement('button');
        button.innerHTML = 'X';
        button.value = index;  
        button.addEventListener('click', removeTodo);
        li.append(button);
        todoList.appendChild(li);
    });
}

function clearTodoLs(){
    while(todoList.children.length > 0){
        todoList.children[0].remove();
    }
} */

/*let todoItem = '';
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
}*/