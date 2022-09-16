/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';

const BookList = () => {
  const [books, setBooks] = useState([
    { id: uuidv4(), title: 'jmall', author: 'anas' },
    { id: uuidv4(), title: 'title', author: 'author' },
    { id: uuidv4(), title: 'title', author: 'author' },
  ]);

  return (
    <ul>
      { books.map((book) => <Book key={book.id} title={book.title} author={book.author} />)}
    </ul>
  );
};
export default BookList;
