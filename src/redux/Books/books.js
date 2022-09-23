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
      return state.filter((book) => book.id !== action.payload);

    case 'redux/Books/book/GET':
      return action.payload;

    default: return state;
  }
}

const addBook = (book) => (dispatch) => {
  fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: 'Fiction',
    }),
  }).then(() => {
    dispatch({
      type: ADD,
      payload: {
        id: book.id, title: book.title, author: book.author,
      },
    });
  });
};

const remBook = (id) => (dispatch) => {
  const URlId = `${URL}${id}`;
  fetch(URlId, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  }).then(() => {
    dispatch({
      type: REMOVE,
      payload: id,
    });
  }).catch((erorr) => console.log(erorr));
};

const getBooks = (dispatch) => {
  fetch(URL).then((response) => response.json())
    .then((data) => {
      const books = Object.keys(data).map((key) => {
        const book = data[key][0];
        return {
          id: key,
          ...book,
        };
      });
      dispatch({
        type: GET,
        payload: books,
      });
    });
};

export { addBook, remBook, getBooks };
