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
  changePasswordSlice,
  updateAddressSlice,
  getCitySlice,
  getTownSlice,
  getAddressSlice,
  saveAddressSlice,
  removeAddressSlice,
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
  changePassword: changePasswordSlice,
  updateAddress: updateAddressSlice,
  getCity: getCitySlice,
  getTown: getTownSlice,
  getAddress: getAddressSlice,
  saveAddress: saveAddressSlice,
  removeAddress: removeAddressSlice,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
