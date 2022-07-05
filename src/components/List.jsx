import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import Todo from './Todo';

const List = () => {
	const { todo } = useContext(TodoContext);

	return todo.length <= 0 ? (
		<p>No se han agregado tareas.</p>
	) : (
		<ul>
			{todo.map((item) => (
				<Todo key={item.id} item={item} />
			))}
		</ul>
	);
};

export default List;
