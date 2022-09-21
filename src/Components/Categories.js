import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatue } from '../redux/Categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const statue = useSelector((state) => state.categoriesReducer);
  return (
    <div>
      <button type="submit" onClick={() => dispatch(checkStatue())}>Check status</button>
      <h2>{statue}</h2>
    </div>
  );
};

export default Categories;
