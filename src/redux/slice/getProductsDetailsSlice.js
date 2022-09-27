import {createSlice} from '@reduxjs/toolkit';

import {getProductDetails} from '../../api';

export const getProductsDetailSlice = createSlice({
  name: 'productDetail',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: false,
    images: undefined,
  },
  extraReducers: {
    [getProductDetails.pending]: state => {
      state.isLoading = true;
    },
    [getProductDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.status = action.payload.status;
      state.images = action.payload.images;
    },
    [getProductDetails.rejected]: (state, action) => {
      state.status = action.payload.status;
    },
  },
});

export default getProductsDetailSlice.reducer;
