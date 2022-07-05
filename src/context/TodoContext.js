import React, { createContext, useState } from 'react'

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todo, setTodo] = useState([]);
    const [todoUpdate, setTodoUpdate] = useState({ name: '', id: '' });

    const data = { todo, setTodo, todoUpdate, setTodoUpdate };

    return (
        <TodoContext.Provider value={data} >
            {children}
        </TodoContext.Provider>
    );
}

export { TodoProvider };
export default TodoContext;