import {
  CHANGE_UP_THEME,
  UPDATE_FILTERED_VALUES,
  UPDATE_SHELF,
  ADD_NEW_SHELF,
  DELETE_BOOK_FROM_SHELF,
  ADD_NEW_FILTER,
  ADD_NEW_COMMENT,
} from '../actions/actions';
import { setToStorage, getFromStorage } from '../../hooks/localStorage';
import { books } from './constants';
import { Alert } from 'antd';

const InitialState = {
  appTheme: 'white',
  books,
  filteredValues: getFromStorage('filteredValues') || ['All'],
  filteredBooks: getFromStorage('filteredBooks') || books,
  shelves: getFromStorage('booksInShelf') || [
    { id: 0, category: 'Fantasy', books: [] },
    { id: 1, category: 'Art', books: [] },
    { id: 2, category: 'Romance', books: [] },
  ],
  filters: getFromStorage('filters') || [
    { label: 'All', value: 'All' },
    { label: 'Fantasy', value: 'Fantasy' },
    { label: 'Art', value: 'Art' },
    { label: 'Romance', value: 'Romance' },
  ],
  users: [
    {
      id: 0,
      url: 'https://www.pngkey.com/png/full/448-4483798_download-icon-user-png-clipart-computer-icons-user.png',
      name: 'JavaScrip',
      message: "I am your's father! Come to the dark side!",
    },
    {
      id: 1,
      url: 'https://www.pngkey.com/png/full/448-4483798_download-icon-user-png-clipart-computer-icons-user.png',
      name: 'Typescript',
      message: 'Where are my types!?',
    },
  ],
};

function changeAppTheme(state, action) {
  return {
    ...state,
    appTheme: state.appTheme === 'white' ? 'grey' : 'white',
  };
}

function filterBooks(books, filtered) {
  if (filtered.includes('All')) {
    return books;
  }
  return books.filter((item) => filtered.includes(item.category));
}

function updateShelves(item, shelves) {
  const newShelves = [...shelves];
  const checkShelf = newShelves.filter((shelf) => shelf.category === item.category);

  if (checkShelf.length) {
    if (!checkShelf[0].books.find((shelf) => shelf.id === item.id)) {
      const shelfIndex = checkShelf[0].id;
      newShelves[shelfIndex].books = [...newShelves[shelfIndex].books, item];

      return newShelves;
    } else return newShelves;
  }
}

function deleteBookById(id, categoryId, shelves) {
  const newShelves = [...shelves];
  const newBooksArray = newShelves[categoryId].books.filter((item) => item.id !== id);

  newShelves[categoryId].books = newBooksArray;
  return newShelves;
}

export const appReducer = (state = InitialState, action) => {
  switch (action.type) {
    case CHANGE_UP_THEME:
      return changeAppTheme(state, action);

    case UPDATE_FILTERED_VALUES:
      const filteredBooks = filterBooks(state.books, action.payload);

      setToStorage('filteredValues', action.payload);
      setToStorage('filteredBooks', filteredBooks);

      return { ...state, filteredValues: action.payload, filteredBooks };

    case UPDATE_SHELF:
      const shelves = updateShelves(action.payload, state.shelves);
      setToStorage('booksInShelf', shelves);

      return { ...state, shelves };

    case ADD_NEW_SHELF:
      const newShelves = [...state.shelves, { id: state.shelves.length, category: action.payload, books: [] }];
      setToStorage('booksInShelf', newShelves);

      return {
        ...state,
        shelves: newShelves,
      };

    case DELETE_BOOK_FROM_SHELF: {
      const shelves = deleteBookById(action.payload.id, action.payload.categoryId, state.shelves);
      setToStorage('booksInShelf', shelves);

      return { ...state, shelves };
    }

    case ADD_NEW_FILTER:
      const newFilters = [...state.filters, { label: action.payload, value: action.payload }];
      setToStorage('filters', newFilters);

      return {
        ...state,
        filters: newFilters,
      };

    case ADD_NEW_COMMENT:
      const newUsers = [
        ...state.users,
        {
          id: action.payload.id,
          url: state.users[0].url,
          name: (state.users.name = 'NewName'),
          message: action.payload.message,
        },
      ];

      return {
        ...state,
        users: newUsers,
      };

    default:
      return state;
  }
};
