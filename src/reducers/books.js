export const BOOK_ACTIONS = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
};

const favorites = (state = [], action) => {
  switch (action.type) {
    case BOOK_ACTIONS.TOGGLE_FAVORITE: {
      const { book } = action;
      if (state.some(item => book.id === item.id)) {
        return state.filter(item => book.id !== item.id);
      } else {
        return [...state, book];
      }
    }
    default: {
      return state;
    }
  }
};

export default favorites;
