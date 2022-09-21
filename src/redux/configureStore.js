import { createStore, combineReducers } from 'redux';
import bookReducer from './Books/books';
import categoriesReducer from './Categories/categories';

const rootReducer = combineReducers({
  bookReducer,
  categoriesReducer,
});

const store = createStore(rootReducer);
export default store;
