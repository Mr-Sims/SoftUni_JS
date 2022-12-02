import { useEffect, useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import styles from './TaskItem.module.css';

const TaskItem = ({
    task
}) => {

    const {taskDeleteHandler, toggleTask} = useContext(TaskContext)

    useEffect(() =>{
        console.log('mounted');

        return () => {
            console.log('unmount');
        }

    }, [])
    return (
        <li>
            <span 
                className={task.isCompleted ? styles.completed : styles.uncompleted}
                onClick={() => toggleTask(task)}
            >
                {task.title}
            </span>
            <button onClick={() => taskDeleteHandler(task._id)}>X</button>   
        </li>
    );
};

export default TaskItem;