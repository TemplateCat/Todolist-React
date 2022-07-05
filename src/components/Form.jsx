import React, { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';

const Form = () => {
	const { setTodo } = useContext(TodoContext);

	const [inputValue, setInputValue] = useState('');

	const handleChange = ({ target }) => setInputValue(target.value);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length <= 0) return;

		setTodo((old) => [{ name: inputValue, id: Date.now() }, ...old]);

		setInputValue('');
	};

	return (
		<form className="flex my-5" onSubmit={handleSubmit}>
			<input className="input input-addtodo" type="text" placeholder="Ingrese una tarea..." value={inputValue} onChange={handleChange} autoFocus />
			<button className="btn btn-input" type="submit">
				Agregar
			</button>
		</form>
	);
};

export default Form;
