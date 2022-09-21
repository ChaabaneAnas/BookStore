import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/Books/books';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [newBook, setBook] = useState({ title: '', author: '' });
  const titleHandler = (e) => {
    setBook({
      ...newBook, title: e.target.value,
    });
  };

  const authorHandler = (e) => {
    setBook({
      ...newBook, author: e.target.value,
    });
  };
  const SubmitBook = { ...newBook };

  const submithandler = (e) => {
    e.preventDefault();
    dispatch(addBook(uuidv4(), SubmitBook));
  };
  return (
    <form action="#" onSubmit={submithandler}>
      <h3>Add new book</h3>
      <input type="text" className="title" placeholder="book title" onChange={titleHandler} required />
      <input type="text" className="author" placeholder="book author" onChange={authorHandler} required />
      <button type="submit" className="addBtn">add book</button>
    </form>
  );
};

export default AddNewBook;
