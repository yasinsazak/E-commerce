import {createSlice} from '@reduxjs/toolkit';

import {getFirstCategories} from '../../api';

export const getFirstCategoriesSlice = createSlice({
  name: 'firstCategories',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: false,
    base_url: undefined,
  },
  extraReducers: {
    [getFirstCategories.pending]: state => {
      state.isLoading = true;
    },
    [getFirstCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.status = action.payload.status;
      state.base_url = action.payload.image_path;
    },
    [getFirstCategories.rejected]: (state, action) => {
      state.status = action.payload.status;
    },
  },
});

export default getFirstCategoriesSlice.reducer;
