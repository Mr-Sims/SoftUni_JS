import { Book } from "./Book";

export const BookList = (props) => {
    // ver 1
    // const bookElements = [];

    // for (const book of props.books) {
    //     bookElements.push( 
    //         <li>
    //             <article>
    //                 <h2>{book.title}</h2>
    //                 <div>Year: {book.year}</div>
    //                 <div>Price: {book.price}</div>
    //                 <footer>
    //                     <span>Author: {book.author}</span>
    //                 </footer>
    //             </article>
    //         </li>
    //      )
    // }


    // ver 2
    // const bookElements = props.books.map(book => <Book 
    //     title={book.title}
    //     year={book.year}
    //     price={book.price}
    //     author={book.author}
    //     />)


    // ver 3
    // const bookElements = props.books.map(book => <Book {...book}/>)

    //ver 4
    // const bookElements = props.books.map(book => <Book data={book} />)

    // return (
    //     <ul>{bookElements}</ul>
    // );

    // ver 5

    
    return (
        <ul>
            {props.books.map((x, i) => <Book key={i} {...x}/>)}
        </ul>
    )
}