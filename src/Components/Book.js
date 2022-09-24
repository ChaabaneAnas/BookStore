/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { remBook } from '../redux/Books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;
  return (
    <div className="book-container">

      <div className="bookDetail">
        <div>
          <span>Action</span>
          <h2>{title}</h2>
          <span>{author}</span>
        </div>
        <div className="interactions">
          <button type="submit" onClick={() => dispatch(remBook({ id, dispatch }))}>delete</button>
          <div className="Line-2" />
          <a href="/">Comment</a>
          <div className="Line-2" />
          <a href="/">Edit</a>
        </div>
      </div>

      <div className="card-2">
        <div className="rotate">
          <span className="circle"> </span>
        </div>
        <div>
          <p className="progress-percent">64%</p>
          <p className="progress-complete">Completed</p>
        </div>
      </div>

      <div className="Line-3" />

      <div className="chapter">
        <span className="Current-Chapter">Current Chapter</span>
        <span className="Current-Lesson">Chapter 17</span>
        <div className="Rectangle-2">Update progress</div>
      </div>
    </div>
  );
};

export default Book;
