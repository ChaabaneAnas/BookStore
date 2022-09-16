import React from 'react';

const AddNewBook = () => (
  <form action="#">
    <h3>Add new book</h3>
    <input type="text" className="title" placeholder="book title" />
    <input type="text" className="author" placeholder="book author" />
    <button type="submit" className="addBtn">add book</button>
  </form>
);

export default AddNewBook;
