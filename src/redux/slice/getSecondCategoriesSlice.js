import {createSlice} from '@reduxjs/toolkit';
import {act} from 'react-test-renderer';

import {getSecondCategories} from '../../api';

export const getSecondCategoriesSlice = createSlice({
  name: 'secondCategories',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: false,
    base_url: undefined,
  },
  extraReducers: {
    [getSecondCategories.pending]: state => {
      state.isLoading = true;
    },
    [getSecondCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.status = action.payload.status;
      state.base_url = action.payload.image_path;
    },
    [getSecondCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.status;
    },
  },
});

export default getSecondCategoriesSlice.reducer;
