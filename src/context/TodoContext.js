import React, { createContext, useEffect, useState } from 'react'

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const localStorageTodo = JSON.parse(localStorage.getItem('todos')) || [];

    const [todo, setTodo] = useState(localStorageTodo);
    const [todoUpdate, setTodoUpdate] = useState({ name: '', id: '' });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todo));
    }, [todo]);

    const data = { todo, setTodo, todoUpdate, setTodoUpdate };

    return (
        <TodoContext.Provider value={data} >
            {children}
        </TodoContext.Provider>
    );
}

export { TodoProvider };
export default TodoContext;