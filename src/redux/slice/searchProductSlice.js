import {createSlice} from '@reduxjs/toolkit';
import {searchProductProcess} from '../../api';

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
      state.data = action.paylaod.data;
      state.status = action.paylaod.status;
      state.base_url = action.paylaod.base_url;
    },
    [searchProductProcess.rejected]: (state, action) => {
      state.isLoading = false;
      state.status = action.paylaod.status;
    },
  },
});

export default searchProductSlice.reducer;
