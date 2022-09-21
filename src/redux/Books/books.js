const ADD = 'redux/Books/book/ADD';
const REMOVE = 'redux/Books/book/REMOVE';

const initialState = [];

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case 'redux/Books/book/ADD':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];

    case 'redux/Books/book/REMOVE':
      return state.filter((book) => book.id !== action.id);

    default: return state;
  }
}

const addBook = (id, title, author) => ({
  type: ADD,
  title,
  author,
});

const remBook = (id) => ({
  type: REMOVE,
  id,

});

export { addBook, remBook };
