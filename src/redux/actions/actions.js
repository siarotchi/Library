export const CHANGE_UP_THEME = 'CHANGE_UP_THEME';
export const UPDATE_FILTERED_VALUES = 'UPDATE_FILTERED_VALUES';
export const UPDATE_SHELF = 'UPDATE_SHELF';
export const ADD_NEW_SHELF = 'ADD_NEW_SHELF';
export const DELETE_BOOK_FROM_SHELF = 'DELETE_BOOK_FROM_SHELF';
export const ADD_NEW_FILTER = 'ADD_NEW_CATEGORY';
export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';

export const switchTheme = () => ({
  type: CHANGE_UP_THEME,
});

export const updateFilteredValues = (values) => ({
  type: UPDATE_FILTERED_VALUES,
  payload: values,
});

export const updateShelf = (shelves) => ({
  type: UPDATE_SHELF,
  payload: shelves,
});

export const addNewShelf = (name) => ({
  type: ADD_NEW_SHELF,
  payload: name,
});

export const deleteBookFromShelf = (id, categoryId) => ({
  type: DELETE_BOOK_FROM_SHELF,
  payload: { id, categoryId },
});

export const addNewFilter = (name) => ({
  type: ADD_NEW_FILTER,
  payload: name,
});

export const addNewComment = (message) => ({
  type: ADD_NEW_COMMENT,
  payload: { message },
});
