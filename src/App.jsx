import React from 'react';
import Form from './components/Form';
import List from './components/List';
import Modal from './components/Modal';
import { ModalProvider } from './context/ModalContext';
import { TodoProvider } from './context/TodoContext';

import './index.css';

const App = () => {
	return (
		<TodoProvider>
			<ModalProvider>
				<div className="container mx-auto mt-10 bg-white rounded-lg p-10">
					<h1 className="text-4xl text-center font-semibold">TodoList</h1>
					<Form />
					<List />
					<Modal />
				</div>
			</ModalProvider>
		</TodoProvider>
	);
};

export default App;
