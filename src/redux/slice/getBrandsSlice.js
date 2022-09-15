import {createSlice} from '@reduxjs/toolkit';

import {getBrandsSliders} from '../../api';

export const getBrandsSlice = createSlice({
  name: 'brands',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: false,
    base_url: undefined,
  },
  extraReducers: {
    [getBrandsSliders.pending]: state => {
      state.isLoading = true;
    },
    [getBrandsSliders.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.status = action.payload.status;
      state.base_url = action.payload.image_path;
    },
    [getBrandsSliders.rejected]: (state, action) => {
      state.status = action.payload.status;
    },
  },
});

export default getBrandsSlice.reducer;
