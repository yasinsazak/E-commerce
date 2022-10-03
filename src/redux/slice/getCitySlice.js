import {createSlice} from '@reduxjs/toolkit';

import {getCityProcess} from '../../api';

export const getCitySlice = createSlice({
  name: 'getCity',
  initialState: {
    data: undefined,
    status: undefined,
    isLoading: false,
  },
  extraReducers: {
    [getCityProcess.pending]: state => {
      state.isLoading = true;
    },
    [getCityProcess.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data =
        action.payload.data !== undefined
          ? action.payload.data
          : action.payload;
      state.status = action.payload.status;
    },
    [getCityProcess.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export default getCitySlice.reducer;
