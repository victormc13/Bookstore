import PropTypes from 'prop-types';
import BookItem from './BookItem';

function Library({ books, removeBook }) {
  return (
    <ul>
      {books.map((book) => (<BookItem key={book.id} item={book} removeBook={removeBook} />))}
    </ul>
  );
}

Library.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Library;
