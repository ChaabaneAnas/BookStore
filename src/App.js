/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './Components/Header';
import Categories from './Components/Categories';
import Books from './Components/Books';
import { getBooks } from './redux/Books/books';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks(dispatch));
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </>
  );
};
export default App;
