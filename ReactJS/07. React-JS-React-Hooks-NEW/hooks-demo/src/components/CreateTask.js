import { useState } from "react";



const CreateTask = ({
    createTaskHandler
}) => {

    
    const [task, setTask] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(task)
        createTaskHandler(task)
        setTask('')
    }

    const onChangeHandler = (e) => {
        setTask(e.target.value)
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <input 
                type="text" 
                name="taskName" 
                placeholder="Do the dishes" 
                value={task}
                onChange={onChangeHandler}
            />
            <input type="submit" value="Add" />
        </form>
    );
};

export default CreateTask;
