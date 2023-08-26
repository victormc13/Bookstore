import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/bookStoreApi';
import styles from './Components.module.css';
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
      {error && <h2>{error}</h2>}
      <ul className={styles.bookContainer}>
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
      {isLoading && <span>Loading...</span>}
    </>
  );
}

export default Library;
