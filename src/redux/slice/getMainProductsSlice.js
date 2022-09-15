import {createSlice} from '@reduxjs/toolkit';

import {getMainProducts} from '../../api';

export const getMainProductsSlice = createSlice({
  name: 'mainProducts',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: false,
    base_url: undefined,
  },
  extraReducers: {
    [getMainProducts.pending]: state => {
      state.isLoading = true;
    },
    [getMainProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.status = action.payload.status;
      state.base_url = action.payload.image_path;
    },
    [getMainProducts.rejected]: (state, action) => {
      state.status = action.payload.status;
    },
  },
});

export default getMainProductsSlice.reducer;
