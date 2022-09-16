import React from 'react';

const Book = (props) => {
    const {title, author, } = props;
  return (
    <div className='book-container'>
      <h2>{title}</h2>
      <p>{author}</p>
      <button>delete</button>
    </div>
  );
};

export default Book;