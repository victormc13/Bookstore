import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchBooks, removeBooks } from '../redux/bookStoreApi';
import styles from './Components.module.css';
import oval from './porcentage.png';

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
        <h2 className={styles.booktTitle}>
          {title}
        </h2>
        <span className={styles.bookAuthor}>
          {author}
        </span>
        <div className={styles.bookBtn}>
          <button className={styles.commentsBtn} type="button">Comments</button>
          <button className={styles.removeBtn} type="button" onClick={() => removeBook()}>Remove</button>
          <button className={styles.editBtn} type="button">Edit</button>
        </div>
      </div>
      <section className={styles.bookDetails}>
        <article className={styles.progress}>
          <img className={styles.ovalProgress} src={oval} alt="porcentage bar" />
          <div className={styles.porcentage}>
            <span>64%</span>
            <span>Completed</span>
          </div>
        </article>
        <article className={styles.status}>
          <span>CURRENT CHAPTER</span>
          <span>Chapter 17</span>
          <button type="button">UPDATE PROGRESS</button>
        </article>
      </section>
    </li>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
