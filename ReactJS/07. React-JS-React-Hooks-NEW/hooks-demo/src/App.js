import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';
import { useEffect, useState } from 'react';
import styles from './App.module.css';
import uniqid from 'uniqid';

function App() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:3030/jsonstore/todos`)
			.then(res => res.json())
			.then(result => {
				setTasks(Object.values(result))
			})
	}, [])


	const createTaskHandler = (newTask) => {
	
		setTasks(state => [
			...state,
			{
				_id: state[state.length - 1]?._id + 1 || 0, 
				title: newTask
			}
		])
	}

	const taskDeteleHandler = (taskId) => {
		setTasks(state => state.filter(x => taskId !== x._id));
	}


	return (
		<div className={styles['site-wrapper']}>

			<header>
				<h1>TODO APP</h1>
			</header>

			<main>
				<TaskList tasks={tasks} taskDeleteHandler={taskDeteleHandler} />
				<CreateTask createTaskHandler={createTaskHandler} />

			</main>
		</div>
	);
};

export default App;
