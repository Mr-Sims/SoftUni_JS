import TaskItem from "./TaskItem";

const TaskList = ({
    tasks,
    taskDeleteHandler
}) => {


    return (
        <ul>
            {tasks.map(t => <TaskItem 
                                key={t._id}    
                                title={t.title} 
                                _id={t._id} 
                                taskDeleteHandler={taskDeleteHandler} 
                            />)}
        </ul>
    );
};

export default TaskList;