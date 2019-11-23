const todoList = {
    currentTodos : [],
    deletedTodos : []
};

const createId = () => {
    const symbolsStr = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let id = '';

    for (let i = 0; i < 10; i++) {
        let index = Math.floor(Math.random() * symbolsStr.length);
        id +=symbolsStr[index];
    }
    return id;
}

const addTodo = (title, description) => {
    if (!title) return console.log('Не было передано название задачи');
    if (!description) return console.log('Не было передано описание задачи');
    const newTodo = {
        id : createId(),
        title,
        description
    }

    todoList.currentTodos.push(newTodo);

    return todoList.currentTodos;
}

const deleteTodo = id => {
    if (!id) return console.log('Не было передано ID редактируемой задачи');
    const removedTodo = todoList.currentTodos.some(todo => todo.id == id);
    if (!removedTodo) return console.log('Такой задачи не существует')
    todoList.deletedTodos.push(removedTodo);
    todoList.currentTodos = todoList.currentTodos.filter(todo => todo.id !== id)
    console.log(todoList.currentTodos);
    console.log(todoList.deletedTodos);
}

const editTodo = (id, title, description) => {
    if (!id) return console.log('Не было передано ID редактируемой задачи');
    const checkTodo = todoList.currentTodos.some(todo => todo.id == id);
    if (!checkTodo) return console.log('Такой задачи не существует')
    if (!title) return console.log('Не было передано название задачи');
    if (!description) return console.log('Не было передано описание задачи');
    todoList.currentTodos = todoList.currentTodos.filter(todo=> todo.id !== id)
    const editedTodo = {id, title, description};
    todoList.currentTodos.push(editedTodo);
    return todoList.currentTodos;
}

