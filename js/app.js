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
    const newTodo = {
        id : createId(),
        title,
        description
    }

    todoList.currentTodos.push(newTodo);

    return todoList.currentTodos;
}

const deleteTodo = id => {
    let removedTodo = todoList.currentTodos.find(todo => todo.id === id);
    todoList.deletedTodos.push(removedTodo);
    removedTodoIndex = todoList.currentTodos.indexOf(removedTodo);
    todoList.currentTodos.splice(removedTodoIndex, 1);

    console.log(todoList.currentTodos);
    console.log(todoList.deletedTodos);
}

const editTodo = (id, title, description) => {
    let editingTodo = todoList.currentTodos.find(todo => todo.id === id);
    editingTodo.title = title;
    editingTodo.description = description;

    return todoList.currentTodos;
}

