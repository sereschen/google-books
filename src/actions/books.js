import { BOOK_ACTIONS } from '../reducers/books';

const { TOGGLE_FAVORITE } = BOOK_ACTIONS;

export const toggleFavorite = book => ({
  type: TOGGLE_FAVORITE,
  book,
});
