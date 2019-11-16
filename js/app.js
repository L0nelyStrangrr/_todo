const todoList = {
    currentTodos : [],
    deletedTodos : []
};


const addTodo = (id, title, description) => {
    const newTodo = {
        id,
        title,
        description
    }

    todoList.currentTodos.push(newTodo);

    return todoList.currentTodos;
}

