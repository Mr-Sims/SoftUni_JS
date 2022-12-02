import TaskItem from "./TaskItem";
import { useContext } from 'react';
import { TaskContext } from "../contexts/TaskContext";

const TaskList = () => {

    const { tasks} = useContext(TaskContext)

    return (
        <ul>
            {tasks.map(t => <TaskItem 
                                key={t._id}    
                                task={t} 
                            />)}
        </ul>
    );
};

export default TaskList;