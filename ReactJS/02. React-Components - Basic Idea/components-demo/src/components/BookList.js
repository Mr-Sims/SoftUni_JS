import { Book } from './Book'

export const BookList = (props) => {
    return (
        <ul>
            <Book
                title={props.booklist[0].title}
                author={props.booklist[0].author}
                year={props.booklist[0].year_written}
                price={props.booklist[0].price}

            />
            <Book
                title={props.booklist[1].title}
                author={props.booklist[1].author}
                year={props.booklist[1].year_written}
                price={props.booklist[1].price}
            />
            <Book
                title={props.booklist[2].title}
                author={props.booklist[2].author}
                year={props.booklist[2].year_written}
                price={props.booklist[2].price}
            />
            <Book
                title={props.booklist[3].title}
                author={props.booklist[3].author}
                year={props.booklist[3].year_written}
                price={props.booklist[3].price}
            />
        </ul>
    );
}