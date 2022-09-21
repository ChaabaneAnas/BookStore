/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { remBook } from '../redux/Books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;
  return (
    <div className="book-container">
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="submit" onClick={() => dispatch(remBook(id))}>delete</button>
    </div>
  );
};

export default Book;
