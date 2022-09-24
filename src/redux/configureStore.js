import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './Books/books';
import categoriesReducer from './Categories/categories';

const rootReducer = combineReducers({
  bookReducer,
  categoriesReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));
export default store;
