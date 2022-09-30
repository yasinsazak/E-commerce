import {createSlice} from '@reduxjs/toolkit';

import {getBrandProductList} from '../../api';

export const getBrandProductListSlice = createSlice({
  name: 'brandProductList',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: undefined,
    base_url: undefined,
  },
  extraReducers: {
    [getBrandProductList.pending]: state => {
      state.isLoading = true;
    },
    [getBrandProductList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.status = action.payload.status;
      state.base_url = action.payload.image_path;
    },
    [getBrandProductList.rejected]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.status;
    },
  },
});

export default getBrandProductListSlice.reducer;
