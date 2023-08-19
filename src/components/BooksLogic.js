import { useState } from 'react';
import Library from './Library';
import InputBook from './InputBook';

function BooksLogic() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 3,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
  ]);

  const addBook = (bookTitle, bookAuthor) => {
    const newBook = {
      id: 4,
      title: bookTitle,
      author: bookAuthor,
    };
    setBooks([...books, newBook]);
  };

  const removeBook = (id) => {
    setBooks([
      ...books.filter((book) => book.id !== id),
    ]);
  };

  return (
    <div>
      <Library books={books} removeBook={removeBook} />
      <InputBook addBook={addBook} />
    </div>
  );
}

export default BooksLogic;
