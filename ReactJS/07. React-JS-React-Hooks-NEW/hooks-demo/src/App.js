import { TaskContext } from './contexts/TaskContext';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';
import useFetch from './hooks/useFetch';
import useTodosApi from './hooks/useTodosApi';
import styles from './App.module.css';



function App() {
	// const [tasks, setTasks] = useState([]);

	// useEffect(() => {
	// 	fetch(`http://localhost:3030/jsonstore/todos`)
	// 		.then(res => res.json())
	// 		.then(result => {
	// 			setTasks(Object.values(result))
	// 		})
	// }, [])

	const [tasks, setTasks, isLoading] = useFetch(`http://localhost:3030/jsonstore/todos`, [])
	const { removeTodo, createTodo, updateTodo } = useTodosApi();

	const createTaskHandler = async (newTask) => {
		const createdTask = await createTodo(newTask)
		setTasks(state => [
			...state,
			createdTask
			// {
			// 	_id: state[state.length - 1]?._id + 1 || 0,
			// 	title: newTask
			// }
		])
	}

	const taskDeleteHandler = (taskId) => {
		removeTodo(taskId)
			.then(result => {
				setTasks(state => state.filter(x => taskId !== x._id));
			})
	}

	const toggleTask = async (task) => {
		const updatedTask = {...task, isCompleted: !task.isCompleted}  
		await updateTodo(task._id, updatedTask)
		setTasks(state => state.map(x => x._id ===  task._id ? updatedTask : x))
	}

	return (

		<TaskContext.Provider value={{tasks, taskDeleteHandler, createTodo, toggleTask}}>
			<div className={styles['site-wrapper']}>

				<header>
					<h1>TODO APP</h1>
				</header>

				<main>
					{isLoading
						? <span>Loading...</span>
						: <TaskList />
					}
					<CreateTask createTaskHandler={createTaskHandler} />

				</main>
			</div>
		</TaskContext.Provider>
	);
};

export default App;
