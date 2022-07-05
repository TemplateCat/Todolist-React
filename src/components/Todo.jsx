import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';

const Todo = ({ item }) => {
	const { id, name } = item;
	const { todo, setTodo } = useContext(TodoContext);

	const handleRemove = (id) => setTodo(todo.filter((item) => item.id !== id));

	return (
		<li className="flex gap-5 py-3 px-2 transition-all duration-300 hover:bg-slate-100">
			<p className="flex-grow first-letter:uppercase break-all">{name}</p>
			<div className="flex gap-2">
				<button className="transition-all duration-300 hover:text-indigo-500">Editar</button>
				<span className="text-slate-400"> &#183; </span>
				<button className="transition-all duration-300 hover:text-red-500" onClick={() => handleRemove(id)}>
					Eliminar
				</button>
			</div>
		</li>
	);
};

export default Todo;
