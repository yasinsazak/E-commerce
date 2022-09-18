import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import {
  getSlidersSlice,
  getBrandsSlice,
  getMainProductsSlice,
  getFirstCategoriesSlice,
  getSecondCategoriesSlice,
  getThirdCategoriesSlice,
} from './slice';

import logger from 'redux-logger';

const reducer = combineReducers({
  sliders: getSlidersSlice,
  brands: getBrandsSlice,
  mainProducts: getMainProductsSlice,
  firstCategories: getFirstCategoriesSlice,
  secondCategories: getSecondCategoriesSlice,
  thirdCategories: getThirdCategoriesSlice,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
