import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import Todo from './Todo';

const List = () => {
	const { todo } = useContext(TodoContext);

	if (todo.length <= 0) {
		return <p>No se han agregado tareas.</p>;
	} else {
		return (
			<ul>
				{todo.map((item) => (
					<Todo key={item.id} item={item} />
				))}
			</ul>
		);
	}

	// todo.length <= 0 ? (<p>Vacio</p>) : (<div></div>);
};

export default List;
