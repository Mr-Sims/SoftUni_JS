import { useEffect } from "react";

const TaskItem = ({
    _id,
    title,
    taskDeleteHandler
}) => {

    useEffect(() =>{
        console.log('mounted');

        return () => {
            console.log('unmount');
        }

    }, [])
    return (
        <li>
            {title}
            <button onClick={() => taskDeleteHandler(_id)}>X</button>    
        </li>
    );
};

export default TaskItem;