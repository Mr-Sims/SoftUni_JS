import { BookList } from './components/BookList';
import { CharacterList } from './components/CharacterList';
import './App.css';

function App() {

  const books = [
    { "title": "Northanger Abbey", "author": "Austen, Jane", "year_written": 1814, "edition": "Penguin", "price": 18.2 },
    { "title": "War and Peace", "author": "Tolstoy, Leo", "year_written": 1865, "edition": "Penguin", "price": 12.7 },
    { "title": "Anna Karenina", "author": "Tolstoy, Leo", "year_written": 1875, "edition": "Penguin", "price": 13.5 },
    { "title": "Mrs. Dalloway", "author": "Woolf, Virginia", "year_written": 1925, "edition": "Harcourt Brace", "price": 25 },
    { "title": "The Hours", "author": "Cunnningham, Michael", "year_written": 1999, "edition": "Harcourt Brace", "price": 12.35 },
    { "title": "Huckleberry Finn", "author": "Twain, Mark", "year_written": 1865, "edition": "Penguin", "price": 5.76 },
    { "title": "Bleak House", "author": "Dickens, Charles", "year_written": 1870, "edition": "Random House", "price": 5.75 },
    { "title": "Tom Sawyer", "author": "Twain, Mark", "year_written": 1862, "edition": "Random House", "price": 7.75 },
  ];



  return (
    <div className="App">
      <header className="App-header">
        <CharacterList />

        <BookList books={books} />


      </header>
    </div>
  );
}

export default App;
