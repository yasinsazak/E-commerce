import {createSlice} from '@reduxjs/toolkit';

import {getThirdCategories} from '../../api';

export const getThirdCategoriesSlice = createSlice({
  name: 'thirdCategories',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: false,
    base_url: undefined,
  },
  extraReducers: {
    [getThirdCategories.pending]: state => {
      state.isLoading = true;
    },
    [getThirdCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.status = action.payload.status;
      state.base_url = action.payload.image_path;
    },
    [getThirdCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.status;
    },
  },
});

export default getThirdCategoriesSlice.reducer;
