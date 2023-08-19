import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Components.module.css';

function InputBook({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  };

  return (
    <div className={styles.formContainer}>
      <span>ADD NEW BOOK</span>
      <form onSubmit={handleSubmit}>
        <input className={styles.title} type="text" placeholder="Add title" value={title} onChange={handleChangeTitle} />
        <input className={styles.author} type="text" placeholder="Add author" value={author} onChange={handleChangeAuthor} />
        <button className={styles.button} type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

InputBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default InputBook;
