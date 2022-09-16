/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import Book from './Book';
import { v4 as uuidv4 } from 'uuid';

const BookList = () => {
    const [books, setBooks] = useState([
        { id: uuidv4(), title: 'jmall', author: 'anas' },
        { id: uuidv4(), title: 'title', author: 'author' },
        { id: uuidv4(), title: 'title', author: 'author' },
    ]);

    return(
       <ul>
       { books.map(book => 
        <Book key={book.id} title ={book.title} author={book.author} />
    )}
        </ul> 
    )
}
export default BookList