import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/bookStoreApi';
import Book from './Book';
import InputBook from './InputBook';

function Library() {
  const {
    bookItems, isLoading, isReady, error,
  } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <ul>
        {isReady
          && Object.keys(bookItems).map((key) => (
            bookItems[key].map((book) => (
              <Book
                key={key}
                id={key}
                title={book.title}
                author={book.author}
              />
            ))
          ))}
      </ul>
      <InputBook />
    </>
  );
}

export default Library;
