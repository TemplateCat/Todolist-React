import React, { createContext, useState } from 'react'

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todo, setTodo] = useState([]);

    const data = { todo, setTodo };

    return (
        <TodoContext.Provider value={data} >
            {children}
        </TodoContext.Provider>
    );
}

export { TodoProvider };
export default TodoContext;