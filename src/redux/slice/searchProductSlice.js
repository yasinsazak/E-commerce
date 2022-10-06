import {createSlice} from '@reduxjs/toolkit';

import { searchProductProcess } from '../../api';

export const searchProductSlice = createSlice({
  name: 'searchProduct',
  initialState: {
    data: undefined,
    isLoading: false,
    status: undefined,
    base_url: undefined,
  },
  extraReducers: {
    [searchProductProcess.pending]: state => {
      state.isLoading = true;
    },
    [searchProductProcess.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.status = action.payload.status;
      state.base_url = action.payload.image_path;
    },
    [searchProductProcess.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export default searchProductSlice.reducer;
