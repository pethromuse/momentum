const todo = document.querySelector('#todo-form input');
const todoForm = document.querySelector('#todo-form');
todoForm.addEventListener('submit', handleTodoSubmit);
const todoList = document.querySelector('#todo-list');

let todoArr = [];
pageStart();
function handleTodoSubmit(event){
    event.preventDefault();  
    const todoObj = {
        text : todo.value,
        id:Date.now()
    }; 
    paintTodo(todoObj);
    todoArr.push(todoObj);
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
        /*parsedTodos.forEach(function(item){
            paintTodo(item);
            todoArr.push(item);
        });*/
        //더 간결한 방법 
        todoArr = parsedTodos;
        parsedTodos.forEach(paintTodo);

    }
}
function paintTodo(newTodo){
    const li = document.createElement('li');
    li.innerHTML = newTodo.text;
    li.id = newTodo.id;
    const button = document.createElement('button');
    button.innerHTML = '❌';
    button.addEventListener('click', removeTodo);
    li.append(button);
    todoList.appendChild(li);
}

function removeTodo(event){
    const target = event.target.parentElement;
    target.remove();
    //아래처럼 하면 전역변수를 만들어야 한다. 화살표함수를 쓰면 해결.
    //todoArr = todoArr.filter(removingElement);

    todoArr = todoArr.filter(element => Number(target.id) !== element.id);

    saveTodos();
    /*const value = event.target.parentElement.innerText.replaceAll('❌','');
    if(todoArr.indexOf(value) != -1){
        todoArr.splice(todoArr.indexOf(value),1);
    }
    console.log(1)
    */
}


function pageStart(){
    loadTodos();
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