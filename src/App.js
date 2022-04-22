import { useRef, useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import Modal from 'react-modal';
import './modal.css';
import { Routes, Route, Link } from 'react-router-dom';

import formPage from './pages/formPage';

function App() {
	const [todos, setTodos] = useState([]);

	// добавление нового элемента
	const addTask = (userInput) => {
		if (userInput) {
			const newItem = {
				id: Math.random().toString(36).substr(2, 9),
				task: userInput,
				complete: false,
			};
			setTodos([...todos, newItem]);
		}
	};

	// удаление
	const removeTask = (id) => {
		setTodos([...todos.filter((todo) => todo.id !== id)]);
	};

	// зачеркнуть при нажатии
	const handleToggle = (id) => {
		setTodos([
			...todos.map((todo) =>
				todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
			),
		]);
	};

	// вывод списка задач
	return (
	<div className="App">
		<header>
			<Link to="/formPage">ИНПУТЫ</Link>
			<h1 className="title">Список задач: {todos.length}</h1>
		</header>
		<Routes>
			<Route path="/formPage" element={<formPage />} />
		</Routes>

		<ToDoForm addTask={addTask} />
		{todos.map((todo) => {
			return (
				<ToDo
					todo={todo}
					key={todo.id}
					toggleTask={handleToggle}
					removeTask={removeTask}
				/>
			);
		})}


	</div>

		
	);
}

export default App;
