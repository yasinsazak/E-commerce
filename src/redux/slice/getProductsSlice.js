import {createSlice} from '@reduxjs/toolkit';

import {getProducts} from '../../api';

export const getProductsSlice = createSlice({
  name: 'productList',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: false,
    base_url: undefined,
  },
  extraReducers: {
    [getProducts]: state => {
      state.isLoading = true;
    },
    [getProducts]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.status = action.payload.status;
      state.base_url = action.payload.image_path;
    },
    [getProducts]: (state, action) => {
      state.status = action.payload.status;
    },
  },
});

export default getProductsSlice.reducer;
