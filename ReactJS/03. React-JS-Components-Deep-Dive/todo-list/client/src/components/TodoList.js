import { TodoItem } from "./TodoItem";
import {useEffect, useState} from 'react';
import { Spinner } from "./Spinner";

export const TodoList = () => {
    const [todos, setTodos] = useState();


    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/todos`)
            .then(res => res.json())
            .then(data => {
                setTodos(Object.values(data))
                console.log(data)
            })
    }, []);

    const todoClickHandler = (todo) => {
        console.log(todo._id)

        fetch(`http://localhost:3030/jsonstore/todos/${todo._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({...todo, isCompleted: !todo.isCompleted})
        })
            .then(res => res.json())
            .then(modifiedTodo => {
                setTodos(oldTodos => oldTodos.map(todo => todo._id == modifiedTodo._id ? modifiedTodo : todo));
            });

        // setTodos(state => state.map(x => x._id == todo._id ? {...x, isCompleted: !x.isCompleted} : x));

    }



    return (
        <table className="table">
        <thead>
            <tr>
                <th className="table-header-task">Task</th>
                <th className="table-header-status">Status</th>
                <th className="table-header-action">Action</th>
            </tr>
        </thead>
        <tbody>

           
           {todos ? todos.map(todo => <TodoItem key={todo._id} {...todo} onClick={todoClickHandler}/>) : <Spinner />}
            
            
        </tbody>
    </table>
    ); 
    
}