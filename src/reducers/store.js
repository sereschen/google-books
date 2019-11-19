import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { loadState, saveState } from '../services/localStorageService';
import favorites from './books';

const appReducer = combineReducers({
  favorites,
});

export const setupStore = () => {
  const middlewares = [ReduxThunk];

  if (process.env.NODE_ENV === `development`) {
    // For redux-logger, which only requires normal browser debugging:
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);

    return createStore(
      appReducer,
      loadState('favorites'),
      compose(applyMiddleware(...middlewares)),
    );
  }

  // on prod, don't include loggers
  return createStore(
    appReducer,
    loadState('favorites'),
    applyMiddleware(...middlewares),
  );
};

const store = setupStore();

store.subscribe(() => {
  saveState('favorites', store.getState());
});

export default store;
