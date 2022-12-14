import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/Books/books';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [newBook, setBook] = useState({
    item_id: '',
    title: '',
    author: '',
    category: 'fiction',
  });
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

  const SubmitBook = { ...newBook, item_id: uuidv4() };

  const submithandler = (e) => {
    e.preventDefault();
    dispatch(addBook({ payload: SubmitBook, dispatch }));
  };
  return (
    <form action="#" onSubmit={submithandler}>
      <h3 className="addBook">Add new book</h3>
      <div className="inputCont">
        <input type="text" className="title" placeholder="book title" onChange={titleHandler} required />
        <input type="text" className="author" placeholder="book author" onChange={authorHandler} required />
        <button type="submit" className="addBtn">add book</button>
      </div>
    </form>
  );
};

export default AddNewBook;
