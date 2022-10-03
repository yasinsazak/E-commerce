import {createSlice} from '@reduxjs/toolkit';

import {getTownProcess} from '../../api';

export const getTownSlice = createSlice({
  name: 'getTown',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: false,
  },
  extraReducers: {
    [getTownProcess.pending]: state => {
      state.isLoading = false;
    },
    [getTownProcess.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data =
        action.payload.data !== undefined
          ? action.payload.data
          : action.payload;
      state.status = action.payload.status;
    },
    [getTownProcess.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export default getTownSlice.reducer;
