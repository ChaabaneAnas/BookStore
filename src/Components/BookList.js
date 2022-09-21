/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.bookReducer);

  return (
    <ul>
      { books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          id={book.id}
        />
      ))}
    </ul>
  );
};
export default BookList;
