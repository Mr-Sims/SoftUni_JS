

export const Book = (props) => {
    return (
        <article>
            <h2>Title: {props.title}</h2>
            <main>
                <span>Year: {props.year}</span>
                <br />
                <span>Price: {props.price}</span>
            </main>
            <footer>
                <span>Author: {props.author}</span>
            </footer>
            <hr />
        </article>

    );
}