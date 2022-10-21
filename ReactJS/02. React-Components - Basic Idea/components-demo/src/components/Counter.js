import { useState } from "react"; 

export const Counter = (props) => {
    const [count, setCount] = useState(Number(props.start) || 0);
    let [direction, setDirection] = useState('')

    const increaseHandler = (e) => {
        setCount(oldCount => oldCount + 1)
        setDirection('Increased')
    }

    const decreaseHandler = (e) => {
        setCount(oldCount => oldCount - 1)
        setDirection('Decreased')
    }

    const clearHandler = (e) => {
        setCount(oldCount => Number(props.start || 0))
        setDirection('Cleared')
    }

    let title = direction;

    if(count < 10) {
        title += ' Counter'
    }

    else if (count < 20) {
        title += ' Turbo counter'
    }

    else if ( count < 30) {
        title += ' Mega counter'
    } else {
        title += ' Monster KILL!!!'
    }

    return (
        <div>
            <h1 style={{fontSize: 16 + count + "px"}}>{title}</h1>
            <h2>{count}</h2>

            <button onClick={increaseHandler}>PLUS</button>
            <button onClick={clearHandler}>CLEAR</button>
            <button onClick={decreaseHandler}>MINUS</button>
        </div>
    )

}