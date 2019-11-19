import { BOOK_ACTIONS } from '../reducers/books';

const { ADD_FAVORITE } = BOOK_ACTIONS;

export const addFavorite = book => ({
  type: ADD_FAVORITE,
  book,
});
