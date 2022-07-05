import React, { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';

const Form = () => {
	const { setTodo } = useContext(TodoContext);

	const [inputValue, setInputValue] = useState('');

	const handleChange = ({ target }) => setInputValue(target.value);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length <= 0) return;

		setTodo((old) => [...old, { name: inputValue, id: Date.now() }]);

		setInputValue('');
	};

	return (
		<form className="flex my-5" onSubmit={handleSubmit}>
			<input className="flex-grow outline-none border-2 border-slate-200 border-r-transparent px-4 rounded-tl-lg rounded-bl-lg transition-all duration-300 focus:border-indigo-500" type="text" placeholder="Ingrese una tarea..." value={inputValue} onChange={handleChange} />
			<button className="bg-indigo-500 text-white font-semibold transition-all duration-300 rounded-r-lg p-2 hover:bg-indigo-400" type="submit">
				Agregar
			</button>
		</form>
	);
};

export default Form;
