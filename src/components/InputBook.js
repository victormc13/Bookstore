import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/bookSlice';
import styles from './Components.module.css';

function InputBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    dispatch(addBook({ id, title, author }));
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

export default InputBook;
