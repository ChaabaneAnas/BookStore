import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OyUiXqyBVJcIT8DxplTW/books';

const ADD = 'redux/Books/book/ADD';
const REMOVE = 'redux/Books/book/REMOVE';
const GET = 'redux/Books/book/GET';
const initialState = [];

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case 'redux/Books/book/ADD':
      return [
        ...state,
        action.payload,
      ];

    case 'redux/Books/book/REMOVE':
      return state.filter((book) => book.item_id !== action.payload);

    case 'redux/Books/book/GET':
      return action.payload;

    default: return state;
  }
}

const addBook = createAsyncThunk(ADD, async (action) => {
  const { payload, dispatch } = action;
  await fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  dispatch({
    type: ADD,
    payload,
  });
});

const remBook = createAsyncThunk(REMOVE, async (action) => {
  const { id, dispatch } = action;
  const URlId = `${URL}/${id}`;
  await fetch(URlId, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  dispatch({
    type: REMOVE,
    payload: id,
  });
});

const getBooks = createAsyncThunk(GET, (action) => {
  const dispatch = action;
  fetch(URL).then((response) => response.json())
    .then((data) => {
      const books = Object.keys(data).map((key) => {
        const book = data[key][0];
        return {
          item_id: key,
          ...book,
        };
      });
      dispatch({
        type: GET,
        payload: books,
      });
    });
});

export { addBook, remBook, getBooks };
