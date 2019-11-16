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

