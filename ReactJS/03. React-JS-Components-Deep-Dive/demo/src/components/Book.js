import { useState, useEffect } from "react"
import styles from './Book.module.css'

export const Book = (props) => {
    const [highlighted, setHighlighted] = useState(false);
    const [deleted, setDeleted] = useState(false);



    useEffect(() => {
        console.log('mounting' + props.title);
    }, [highlighted, props.title])

    useEffect(() => {
        console.log('updating' + props.title)
    }, [highlighted, props.title])



    const clickHandler = () => {
        setHighlighted(state => !state)
    }

    const deleteHandler = () => {
        setDeleted(state => !state)
    }



    let style = {}
    if (highlighted) {
        style.backgroundColor ='gray';
    } 

    if (deleted) {
         style.backgroundColor = 'red';
    }



    return ( 
        <li className={`${styles['book-item']} ${styles['other-class']}`} style={style}>
        <article>
            <h2>{props.title}</h2>
            <div>Year: {props.year}</div>
            <div>Price: {props.price}</div>
            <footer>
                <button onClick={clickHandler}>Highlight</button>
                <button onClick={deleteHandler}>Delete</button>
                <span className={styles.author}>Author: {props.author}</span>
            </footer>
        </article>
    </li>
    )
} 