export const BOOK_ACTIONS = {
  ADD_FAVORITE: 'ADD_FAVORITE',
};

const favorites = (state = [], action) => {
  switch (action.type) {
    case BOOK_ACTIONS.ADD_FAVORITE: {
      const { book } = action;
      return [...state, book];
    }
    default: {
      return state;
    }
  }
};

export default favorites;
