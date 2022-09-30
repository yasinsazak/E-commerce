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
  getProductsSlice,
  getProductsDetailsSlice,
  authenticationSlice,
  basketSlice,
  getBrandProductListSlice,
  getMemberInfoSlice,
} from './slice';

import logger from 'redux-logger';

const reducer = combineReducers({
  sliders: getSlidersSlice,
  brands: getBrandsSlice,
  mainProducts: getMainProductsSlice,
  firstCategories: getFirstCategoriesSlice,
  secondCategories: getSecondCategoriesSlice,
  thirdCategories: getThirdCategoriesSlice,
  productList: getProductsSlice,
  brandProductList: getBrandProductListSlice,
  authentication: authenticationSlice,
  basket: basketSlice,
  productDetail: getProductsDetailsSlice,
  memberInfo: getMemberInfoSlice,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
