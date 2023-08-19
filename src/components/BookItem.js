import PropTypes from 'prop-types';
import styles from './Components.module.css';

function BookItem({ item, removeBook }) {
  return (
    <li className={styles.bookItem}>
      <div className={styles.bookDescription}>
        <h3 className={styles.booktTitle}>
          {item.title}
        </h3>
        <span className={styles.bookAuthor}>
          {item.author}
        </span>
        <div>
          <button className={styles.commentsBtn} type="button">Comments</button>
          <button className={styles.removeBtn} type="button" onClick={() => removeBook(item.id)}>Remove</button>
          <button className={styles.editBtn} type="button">Edit</button>
        </div>
      </div>
    </li>
  );
}

BookItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default BookItem;
