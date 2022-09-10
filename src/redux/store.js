import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import {firstCategoriesSlice} from './slice';

import logger from 'redux-logger';

const reducer = combineReducers({
  firstCategories: firstCategoriesSlice,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
