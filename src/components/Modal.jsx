import React, { useContext, useEffect, useState } from 'react';
import ModalContext from '../context/ModalContext';
import TodoContext from '../context/TodoContext';

const Modal = () => {
	const { stateModal, setStateModal } = useContext(ModalContext);
	const { todo, setTodo, todoUpdate, setTodoUpdate } = useContext(TodoContext);

	const { name, id } = todoUpdate;

	const [inputValue, setInputvalue] = useState('');

	useEffect(() => {
		setInputvalue(name);
	}, [name]);

	const handleChange = ({ target }) => setInputvalue(target.value);

	const handleCloseModal = () => {
		setStateModal(false);
		setTodoUpdate({ name: '', id: '' });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length <= 0 || inputValue === name) return;

		setStateModal(false);

		const newList = todo.map((item) => {
			if (item.id === id) {
				item.name = inputValue;
			}
			return item;
		});

		setTodo(newList);
		setTodoUpdate({ name: '', id: '' });
	};

	return (
		<div className={`${stateModal ? 'visible opacity-100' : 'invisible opacity-0'} fixed top-0 left-0 bg-[#00000054] h-full w-full transition-all duration-300`} onClick={handleCloseModal}>
			<div className={`${stateModal ? 'scale-100' : 'scale-0'} flex justify-center mt-40 transition-all duration-300`} onClick={(e) => e.stopPropagation()}>
				<div className="bg-white relative rounded-lg p-5">
					<button className="absolute btn -top-4 -right-4 text-xl" onClick={handleCloseModal}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
							<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
						</svg>
					</button>
					<form onSubmit={handleSubmit}>
						<input className="input update-todo py-2 w-96" type="text" placeholder="Actualizar tarea" value={inputValue} onChange={handleChange} autoFocus />
						<button className="btn block mt-2 ml-auto" type="submit">
							Actualizar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Modal;
