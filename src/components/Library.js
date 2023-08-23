import { useSelector } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';

function Library() {
  const { bookItems } = useSelector((store) => store.books);

  return (
    <>
      <ul>
        {bookItems.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
      <InputBook />
    </>
  );
}

export default Library;
