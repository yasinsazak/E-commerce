import {createSlice} from '@reduxjs/toolkit';

import {getFirstCategories} from '../../api';

export const firstCategoriesSlice = createSlice({
  name: 'firstCategories',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: false,
  },
  extraReducers: {
    [getFirstCategories.pending]: state => {
      state.isLoading = true;
    },
    [getFirstCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.status = action.payload.status;
    },
    [getFirstCategories.rejected]: (state, action) => {
      state.status = action.payload.status;
    },
  },
});

export default firstCategoriesSlice.reducer;
