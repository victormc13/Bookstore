import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchBooks, removeBooks } from '../redux/bookStoreApi';
import styles from './Components.module.css';

function Book({ id, title, author }) {
  const dispatch = useDispatch();

  const removeBook = () => {
    dispatch(removeBooks({ id }))
      .then(() => {
        dispatch(fetchBooks());
      });
  };

  return (
    <li className={styles.bookItem}>
      <div className={styles.bookDescription}>
        <h3 className={styles.booktTitle}>
          {title}
        </h3>
        <span className={styles.bookAuthor}>
          {author}
        </span>
        <div>
          <button className={styles.commentsBtn} type="button">Comments</button>
          <button className={styles.removeBtn} type="button" onClick={() => removeBook()}>Remove</button>
          <button className={styles.editBtn} type="button">Edit</button>
        </div>
      </div>
    </li>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
